using MongoDB.Bson.Serialization.Attributes;

namespace ExpenseSplitter.Server.Models
{
    public class UserModel
    {
        [BsonElement("name")]
        public string UserName { get; set; }
    }
}
