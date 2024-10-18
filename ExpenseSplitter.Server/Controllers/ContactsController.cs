using ExpenseSplitter.Server.Models;
using ExpenseSplitter.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseSplitter.Server.Controllers
{

    [ApiController]
    [Route("[controller]")]

    public class ContactsController : Controller
    {
        
            private readonly ContactService _contactService;

            public ContactsController(ContactService contactService)
            {
                _contactService = contactService;
            }

            [HttpPost]
            public async Task<IActionResult> AddContact([FromBody] Contact contact)
            {
                return await _contactService.AddContact(contact);
            }
        
    }
}
