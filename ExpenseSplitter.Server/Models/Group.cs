using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace ExpenseSplitter.Server.Models
{
    public class Group
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public string GroupName { get; set; }
        public List<string> Members { get; set; }
        public string OwnerId { get; set; }
    }
}
