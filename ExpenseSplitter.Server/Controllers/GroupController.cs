using ExpenseSplitter.Server.Models;
using ExpenseSplitter.Server.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Immutable;

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
        public async Task<IActionResult> GetAllGroups(string ownerId)
        {
            var groups = await _groupService.GetAllGroups(ownerId);
            var groupDtos = groups.Select(group => new GroupConvert
            {
                Id = group.Id.ToString(),
                GroupName = group.GroupName,
                Members = group.Members,
                OwnerId = group.OwnerId
            }).ToList();
            return Ok(groupDtos);
        }






        //[HttpGet("{ownerId}")]
        //public async Task<IActionResult> GetGroupById(string ownerId)
        //{
        //    var group = await _groupService.GetGroupById(ownerId);

        //    return group == null ? NotFound() : Ok(group);
        //}



        [HttpPost("CreatingGroup")]
        public async Task<bool> CreateGroup([FromBody] Group group)
        {
           
            var response = await _groupService.CreateGroup(group);
            return response;
        }
    }
}
