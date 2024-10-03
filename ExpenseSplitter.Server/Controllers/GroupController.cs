using ExpenseSplitter.Server.Models;
using ExpenseSplitter.Server.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace ExpenseSplitter.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GroupController : ControllerBase
    {
        private readonly GroupService _groupService;

        public GroupController(GroupService groupService)
        {
            _groupService = groupService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllGroups()
        {
            var groups = await _groupService.GetAllGroups();
            return Ok(groups);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetGroupById(string id)
        {
            var group = await _groupService.GetGroupById(id);
            return group == null ? NotFound() : Ok(group);
        }

        [HttpPost]
        public async Task<IActionResult> CreateGroup([FromBody] Group group)
        {
            await _groupService.CreateGroup(group);
            return CreatedAtAction(nameof(GetGroupById), new { id = group.Id.ToString() }, group);
        }
    }
}
