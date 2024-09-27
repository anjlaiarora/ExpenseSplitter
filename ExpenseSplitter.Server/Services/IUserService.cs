using ExpenseSplitter.Server.Models;

namespace ExpenseSplitter.Server.Services
{
    public interface IUserService
    {
        User GetUserByEmail(string email);
        void CreateUser(User user);
    }
}
