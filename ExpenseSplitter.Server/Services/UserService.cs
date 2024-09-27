using ExpenseSplitter.Server.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace ExpenseSplitter.Server.Services
{
    public class UserService: IUserService
    {

        private readonly IMongoCollection<User> _users;

        public UserService(IMongoClient config)
        {
            var database = config.GetDatabase("Expensespitter");
            _users = database.GetCollection<User>("Users");
        }

        public User GetUserByEmail(string email)
        {
            var filter = Builders<User>.Filter.Eq(user => user.Email, email);
            return _users.Find(filter).FirstOrDefault();
            //return _users.Find(user => user.Email == email).FirstOrDefault();
        }

        public void CreateUser(User user)
        {
            _users.InsertOne(user);
        }




    }
}
