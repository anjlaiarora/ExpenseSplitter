using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
namespace ExpenseSplitter.Server.Models
{
    [BsonIgnoreExtraElements]
    public class User
    {

        [BsonElement("Username"),BsonIgnoreIfDefault,BsonIgnoreIfNull]
        public string Username { get; set; }

        [BsonElement("Email"), BsonIgnoreIfDefault, BsonIgnoreIfNull]
        public string Email { get; set; }

        [BsonElement("Password"), BsonIgnoreIfDefault, BsonIgnoreIfNull]
        public string Password { get; set; }
        
    }
    public class Login
    {

        [BsonElement("Email"), BsonIgnoreIfDefault, BsonIgnoreIfNull]
        public string Email { get; set; }

        [BsonElement("Password"), BsonIgnoreIfDefault, BsonIgnoreIfNull]
        public string Password { get; set; }

    }
}
