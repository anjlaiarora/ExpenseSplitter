using ExpenseSplitter.Server.Models;
using ExpenseSplitter.Server.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace ExpenseSplitter.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExpenseController : Controller
    {
        private readonly ExpenseService _expenseService;

        public ExpenseController(ExpenseService expenseService)
        {
            _expenseService = expenseService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllExpenses()
        {
            var expenses = await _expenseService.GetAllExpenses(); 
            return Ok(expenses);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetExpenseById(string id)
        {
            var expense = await _expenseService.GetExpenseById(id);
            return expense == null ? NotFound() : Ok(expense);
        }

        [HttpPost]  
        public async Task<IActionResult> CreateExpense([FromBody] Expense expense)
        {
            await _expenseService.CreateExpense(expense);
            return CreatedAtAction(nameof(GetExpenseById), new { id = expense.Id.ToString() }, expense);
        }



        [HttpPost("Cal")]   
        public async Task<IActionResult> CreateSettle([FromBody] Settle group)
        {
            List<SettlementResult> result = await _expenseService.CalculateSettlements(group.GroupId);
            return Ok(result);
        }




    }
}

