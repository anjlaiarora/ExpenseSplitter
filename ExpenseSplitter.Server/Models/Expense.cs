using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace ExpenseSplitter.Server.Models
{
    [BsonIgnoreExtraElements]
    public class Expense
    {
        [BsonIgnoreIfDefault, BsonIgnoreIfNull]
        
        [BsonElement("_id"), BsonRepresentation(BsonType.ObjectId)]
        public ObjectId Id { get; set; }

        [BsonIgnoreIfDefault, BsonIgnoreIfNull]

        public string ExpenseName { get; set; }

        [BsonIgnoreIfDefault, BsonIgnoreIfNull]

        public decimal TotalAmount { get; set; }

        [BsonIgnoreIfDefault, BsonIgnoreIfNull]

        public string Payer { get; set; }

        [BsonIgnoreIfDefault, BsonIgnoreIfNull]

        public ExpenseType SplitType { get; set; }

        [BsonIgnoreIfDefault, BsonIgnoreIfNull]

        public string GroupId { get; set; }


        [BsonIgnoreIfDefault, BsonIgnoreIfNull]

        public List<FriendsExp> Friends { get; set; }

    }

    public class FriendsExp {
        public string Name { get; set; }

        public decimal Amount { get; set; }
    }

    public enum ExpenseType
    {
        [Display(Name = "Equal")]
        Equal,
        [Display(Name = "Custom")]
        Custom
    }

}
