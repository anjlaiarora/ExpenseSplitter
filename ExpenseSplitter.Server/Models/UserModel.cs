using MongoDB.Bson.Serialization.Attributes;

namespace ExpenseSplitter.Server.Models
{
    public class UserModel
    {
        [BsonElement("name")]
        public string UserName { get; set; } = null!;

        [BsonIgnoreIfNull, BsonIgnoreIfDefault]
        public string Email { get; set; } = null!;

        [BsonIgnoreIfNull, BsonIgnoreIfDefault]

        public int Password { get; set; }
    }
}
