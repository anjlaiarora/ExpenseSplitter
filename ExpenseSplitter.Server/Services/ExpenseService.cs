using ExpenseSplitter.Server.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ExpenseSplitter.Server.Services
{
    public class ExpenseService
    {
        private readonly IMongoCollection<Expense> _expenses;

        public ExpenseService(IMongoClient mongoClient)     
        {
            var database = mongoClient.GetDatabase("Expensespitter");
            _expenses = database.GetCollection<Expense>("Expenses");
        }

        public async Task<List<Expense>> GetAllExpenses() => await _expenses.Find(expense => true).ToListAsync();

        public async Task<Expense> GetExpenseById(string id) => await _expenses.Find(expense => expense.Id == new ObjectId(id)).FirstOrDefaultAsync();

        public async Task CreateExpense(Expense expense) => await _expenses.InsertOneAsync(expense); 
    }
}

