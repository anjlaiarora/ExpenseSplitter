using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ExpenseSplitAPI.Models
{
    public class Expense
    {
        [BsonId]
        public ObjectId Id { get; set; } 
        public string ExpenseName { get; set; } 
        public decimal Amount { get; set; } 
        public string Payer { get; set; } 
        public string SplitType { get; set; } 
        public ObjectId GroupId { get; set; } 
    }
}
