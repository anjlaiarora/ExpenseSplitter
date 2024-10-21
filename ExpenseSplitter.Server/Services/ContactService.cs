using ExpenseSplitter.Server.Models;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace ExpenseSplitter.Server.Services
{
    public class ContactService
    {
        public readonly IMongoCollection<Contact> _contact;

        public ContactService(IMongoClient config)
        {
            var database = config.GetDatabase("Expensespitter");
            _contact = database.GetCollection<Contact>("Contact");
        }

        public async Task<IActionResult> AddContact(Contact contact)
        {
            try
            {
                await _contact.InsertOneAsync(contact);
                return new OkObjectResult("Contact added successfully.");
            }
            catch (Exception ex)
            {
                return new StatusCodeResult(500);
            }
        }
    }
}
