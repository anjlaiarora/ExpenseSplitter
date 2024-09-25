using MongoDB.Bson.Serialization.Attributes;

namespace ExpenseSplitter.Server.Models
{
    public class Contact
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]

        public string Name { get; set; } = null!;

        public string Email { get; set; } = null!;

        public decimal ContactUs { get; set; }

        public string Address { get; set; } = null!;

        public string City { get; set; } = null!;

        public string State { get; set; } = null!;

        public string Country { get; set; } = null!;
    }
}
