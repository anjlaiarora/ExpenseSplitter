
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

        //[HttpGet("register")]


        // Login existing user
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] Login login)
        {
            // Check if the user exists by email
            var existingUser =  _userService.GetUserByEmail(login.Email);

            if (existingUser == null)
            {
                return NotFound("User not found.");
            }

            // Verify the password
            bool isPasswordValid = BCrypt.Net.BCrypt.Verify(login.Password, existingUser.Password);

            if (!isPasswordValid)
            {
                return Unauthorized("Invalid password.");
            }

            // If login is successful, return user details
            var userResponse = new
            {
                _id = existingUser.Id.ToString(),
                username = existingUser.UserName,
                email = existingUser.Email,
                password = existingUser.Password // If required, otherwise avoid returning sensitive data
            };

            return Ok(userResponse);
        }

        //if (_userService.GetUserAsync(user.Email) != null)
        //{
        //    return BadRequest("Email already exist");
        //}


        //user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);

        //var userId = _userService.GetUserAsync(user);
        //return Ok(new { userId });
    }

        //public string Login([FromBody] Login login)
        //{
        //    User user = _userService.GetUserByEmail(login.Email);
        //    if (user == null || !BCrypt.Net.BCrypt.Verify(login.Password, user.Password))
        //    {
        //        return "Invalid credentials.";
        //    }


        //    return user.Id.ToString();


        //}

        //[HttpPost("login")]
        //public async Task<IActionResult> Login([FromBody] Login login)
        //{
        //    try
        //    {
        //        // Ensure both username/email and password are provided
        //        if (string.IsNullOrEmpty(login.userName) || string.IsNullOrEmpty(login.Password))
        //        {
        //            return BadRequest("Username/email or password is missing.");
        //        }

        //        User newUser = await _userService.GetUserAsync(login.userName);

        //        if (newUser == null)
        //        {
        //            return NotFound("User not found.");
        //        }

        //        bool isPasswordValid = BCrypt.Net.BCrypt.Verify(login.Password, newUser.Password);
        //        if (!isPasswordValid)
        //        {
        //            return Unauthorized("Invalid password.");
        //        }

        //        return Ok(newUser);
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(500, $"Internal server error: {ex.Message}");
        //    }
        //}





    }

