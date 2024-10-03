using ExpenseSplitter.Server.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ExpenseSplitter.Server.Services
{
    public class GroupService
    {
        private readonly IMongoCollection<Group> _groups;
            
        public GroupService(IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase("Expensespitter");
            _groups = database.GetCollection<Group>("Groups");
        }

        public async Task<List<Group>> GetAllGroups() => await _groups.Find(group => true).ToListAsync();

        public async Task<Group> GetGroupById(string id) => await _groups.Find(group => group.Id == new ObjectId(id)).FirstOrDefaultAsync();

        public async Task CreateGroup(Group group) => await _groups.InsertOneAsync(group);
    }
}
