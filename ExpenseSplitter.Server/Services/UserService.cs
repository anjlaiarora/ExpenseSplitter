using ExpenseSplitter.Server.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace ExpenseSplitter.Server.Services
{
    public class UserService
    {
        private readonly IMongoCollection<UserModel> MongoClient;

        public UserService(IMongoClient client)
        {
            var db = client.GetDatabase("Expensespitter");
            var collection = db.GetCollection<UserModel>("Expense");
            MongoClient = collection;
        }

        public async Task<UserModel> Create(UserModel user)
        {
            UserModel userModel = new UserModel();
            if (user == null)
            {
                throw new ArgumentNullException("this user not exist");
            }
            else
            {
                var result = MongoClient.InsertOneAsync(user);

            }
            return userModel;
        }
    }
}
