using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SimpleAuthApi.Models
{
    [BsonIgnoreExtraElements]
    public class User
    {
       

        [BsonIgnoreIfDefault, BsonIgnoreIfNull]

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId), BsonElement("_id")]

        public string? Id { get; set; }

        [BsonElement("userName")]
        public string UserName { get; set; }
        
        [BsonElement("Email")]
        public string Email { get; set; }

        [BsonElement("Password")]
        public string Password { get; set; }
    }
    public class Login
    {

        //[BsonId]
        //[BsonElement("_id")]
        //public string? Id { get; set; }

        [BsonElement("Email")]
        public string Email { get; set; }

        [BsonElement("Password")]
        public string Password { get; set; }
    }
}
