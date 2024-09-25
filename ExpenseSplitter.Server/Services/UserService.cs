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

        //public async Task<UserModel> Create(UserModel user)
        //{
        //    UserModel userModel = new UserModel();
        //    if (user == null)
        //    {
        //        throw new ArgumentNullException("this user not exist");
        //    }
        //    else
        //    {
        //        var result = MongoClient.InsertOneAsync(user);

        //    }
        //    return userModel;
        //}
        public async Task<List<Models.UserModel>> GetAsync() =>
            await MongoClient.Find(_ => true).ToListAsync();

        public async Task<Models.UserModel?> GetAsync(string id) =>
            await MongoClient.Find(x => x.UserName == id).FirstOrDefaultAsync();

        public async Task CreateAsync(UserModel newUserModel) =>
            await MongoClient.InsertOneAsync(newUserModel);

        public async Task UpdateAsync(string id, UserModel updatedAll) =>
            await MongoClient.ReplaceOneAsync(x => x.UserName == id, updatedAll);

        public async Task RemoveAsync(string id) =>
            await MongoClient.DeleteOneAsync(x => x.UserName == id);

    }
}
