using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SimpleAuthApi.Models
{
    [BsonIgnoreExtraElements]
    public class User
    {


        //[BsonIgnoreIfDefault, BsonIgnoreIfNull]
        //public string Id { get; set; } 

        [BsonElement("Username")]
        public string Username { get; set; }

        [BsonElement("Email")]
        public string Email { get; set; }

        [BsonElement("Password")]
        public string Password { get; set; }
    }
    public class Login
    {


        [BsonElement("Email")]
        public string Email { get; set; }

        [BsonElement("Password")]
        public string Password { get; set; }
    }
}
