

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace ExpenseSplitAPI.Models
{

    [BsonIgnoreExtraElements]

    public class Group
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId), BsonIgnoreIfNull, BsonIgnoreIfDefault]

        public ObjectId Id { get; set; }
        public string GroupName { get; set; } 
        public List<string> Members { get; set; } 
        public string OwnerId { get; set; } 
    }
}
