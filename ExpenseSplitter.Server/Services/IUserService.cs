﻿
using SimpleAuthApi.Models;

namespace ExpenseSplitter.Server.Services
{
    public interface IUserService
    {
        User GetUserByEmail(string email);
        string CreateUser(User user);
        //Task<User> GetUserAsync(object userName);
        //Task<User> GetUserAsync(string userName);
    }
}
