using ExpenseSplitter.Server.Models;
using MongoDB.Bson;
using MongoDB.Driver;

namespace ExpenseSplitter.Server.Services
{
    public class GroupService
    {
        private readonly IMongoCollection<Group> _groups;

        public GroupService(IMongoClient config)
        {
            var database = config.GetDatabase("Expensespitter");
            _groups = database.GetCollection<Group>("Groups");
        }



        //public async Task<List<Group>> GetAllGroups(string userId) => await _groups.Find(group => true).ToListAsync();


        public async Task<List<Group>> GetAllGroups(string userId)
        {
            var filter = Builders<Group>.Filter.Or(
                Builders<Group>.Filter.Eq(g => g.OwnerId, userId),
                Builders<Group>.Filter.AnyEq(g => g.Members, userId)
            );


            return await _groups.Find(filter).ToListAsync();
        }



        public async Task<Group> GetGroupById(string ownerId)
        {
            return await _groups.Find(group => group.OwnerId == ownerId).FirstOrDefaultAsync();
        }
        public async Task<bool> CreateGroup(Group group)
        {
            try
            {
                await _groups.InsertOneAsync(group);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
