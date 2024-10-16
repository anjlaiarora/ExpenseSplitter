
using ExpenseSplitter.Server.Services;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using SimpleAuthApi.Models;

namespace ExpenseSplitter.Server.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {


        private readonly IUserService _userService;
        private object objectId;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }





        // Register a new user
        [HttpPost("register")]
        public IActionResult Register([FromBody] User user)
        {
            if (_userService.GetUserByEmail(user.Email) != null)
            {
                return BadRequest("Email already exist");
            }

            
            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);

            var userId = _userService.CreateUser(user);
            return Ok(new { userId });
            //return Ok("User register successfully");
        }


            
        // Login existing user
        [HttpPost("login")]
        public string Login([FromBody] Login login)
        {
            User user = _userService.GetUserByEmail(login.Email);
            if (user == null || !BCrypt.Net.BCrypt.Verify(login.Password, user.Password))
            {
                return "Invalid credentials.";
            }

        
            return user.Id.ToString();


        } 
         
            
       
    }
}
