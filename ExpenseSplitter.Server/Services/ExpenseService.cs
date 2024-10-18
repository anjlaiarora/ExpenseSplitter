using ExpenseSplitter.Server.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using SimpleAuthApi.Models;
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

        public async Task<List<Expense>> GetExpenseById(string id) {
            
          return  await _expenses.Find(expense => expense.GroupId == id).ToListAsync(); 
    }

        public async Task CreateExpense(Expense expense) => await _expenses.InsertOneAsync(expense);


            
        public async Task<List<SettlementResult>> CalculateSettlements(string groupId)
        {
            var expenses =await  _expenses.Find(e => e.GroupId == groupId).ToListAsync();
            var balance = new Dictionary<string, decimal>();

            // Calculate total expenses per member
            foreach (var expense in expenses)
            {
                foreach (var friend in expense.Friends)
                {
                    var member = friend.Name;
                    var amount = Convert.ToDecimal(friend.Amount);

                    if (!balance.ContainsKey(member))
                        balance[member] = 0;

                    balance[member] -= amount; // Deduct what the friend has paid

                    if (!balance.ContainsKey(expense.Payer))
                        balance[expense.Payer] = 0;

                    balance[expense.Payer] += amount; // Add to the payer's balance
                }
            }

            // Calculate settlements
            var settlementResults = new List<SettlementResult>();

            foreach (var payer in balance.Keys)
            {
                var settlementResult = new SettlementResult { Payer = payer };

                foreach (var other in balance.Keys)
                {
                    if (payer != other)
                    {
                        var amount = Math.Min(balance[payer], -balance[other]);
                        if (amount > 0)
                        {
                            settlementResult.Settlements.Add(new SettlementDetail
                            {
                                Payee = other,
                                Amount = amount
                            });

                            balance[payer] -= amount;
                            balance[other] += amount;
                        }
                    }
                }

                if (settlementResult.Settlements.Count > 0)
                {
                    settlementResults.Add(settlementResult);
                }
            }

            return settlementResults; // This will give you a structured list of settlements
        }



    }
}

