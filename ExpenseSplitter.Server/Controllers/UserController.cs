using ExpenseSplitter.Server.Models;
using ExpenseSplitter.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseSplitter.Server.Controllers
{
    public class UserController : Controller
    {
        private readonly UserService userService;

        [HttpPost]
        public async Task<UserModel> Create(UserModel model)
        {
            var resultVal = await userService.Create(model);
            return resultVal;
        }
    }
}
