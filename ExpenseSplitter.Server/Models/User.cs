using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SimpleAuthApi.Models
{
    [BsonIgnoreExtraElements]
    public class User
    {


        [BsonIgnoreIfDefault, BsonIgnoreIfNull]

        [BsonId]  // This ensures MongoDB treats this as the document ID
        [BsonRepresentation(BsonType.ObjectId)] // Represents as an ObjectId type
        [BsonElement("_id")]
        public ObjectId Id { get; set; } 

        [BsonElement("Username")]
        public string Username { get; set; }

        [BsonElement("Email")]
        public string Email { get; set; }

        [BsonElement("Password")]
        public string Password { get; set; }
    }
    public class Login
    {

        [BsonId]
        [BsonElement("_id")]
        public ObjectId Id { get; set; }

        [BsonElement("Email")]
        public string Email { get; set; }

        [BsonElement("Password")]
        public string Password { get; set; }
    }
}
