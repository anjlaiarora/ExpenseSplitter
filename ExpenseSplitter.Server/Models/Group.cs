using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace ExpenseSplitter.Server.Models
{

    [BsonIgnoreExtraElements]
    public class Group
    {
        [BsonIgnoreIfDefault, BsonIgnoreIfNull]
        [BsonElement("_id"),BsonRepresentation(BsonType.ObjectId)]
        //[BsonId]
        public ObjectId Id { get; set; }
      
        [BsonIgnoreIfDefault, BsonIgnoreIfNull]
        public string GroupName { get; set; }
        [BsonIgnoreIfDefault, BsonIgnoreIfNull]
        public List<string> Members { get; set; }

        [BsonIgnoreIfDefault, BsonIgnoreIfNull]
        public string OwnerId { get; set; }
    }

    public class GroupConvert
    {
        
        public string Id { get; set; }
        public string GroupName { get; set; }
        public List<string> Members { get; set; }
        public string OwnerId { get; set; }
    }
}
