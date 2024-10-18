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



        public async Task<IActionResult> AddContact([FromBody] Contact contact)
        {
            try
            {
                await _contact.InsertOneAsync(contact);
                return Ok("Contact added successfully.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message); 
            }
        }

        private IActionResult StatusCode(int v, string message)
        {
            throw new NotImplementedException();
        }

        private IActionResult Ok(string v)
        {
            throw new NotImplementedException();
        }
    }
}
