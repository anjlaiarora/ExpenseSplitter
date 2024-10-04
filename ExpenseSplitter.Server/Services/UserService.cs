
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using SimpleAuthApi.Models;

namespace ExpenseSplitter.Server.Services
{
    public class UserService: IUserService
    {

        //User is a object which defines structure of user data you want to store in collection.
        // _user is a variable that holds instance of IMongoCollection<User>
        private readonly IMongoCollection<User> _users;

        

        //constructor -- IMongoClient helps connecting to mongodb database and interact with collection.
        //config-- reference to the mongodb collection
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
