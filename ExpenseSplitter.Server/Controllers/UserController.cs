using ExpenseSplitter.Server.Models;
using ExpenseSplitter.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseSplitter.Server.Controllers
{
    public class UserController : Controller
    {
        private readonly UserService userService;

        public UserController(UserService userServices)
        {
            this.userService = userServices;
        }

        [HttpPost]
        public async Task<bool> Create(UserModel model)
        {
             var result = userService.CreateAsync(model);
            return true;
        }
    }
}
