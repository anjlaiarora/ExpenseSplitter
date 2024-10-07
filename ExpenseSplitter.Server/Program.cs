
using ExpenseSplitter.Server.Services;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);



//builder.Services.Configure<MongoDBSettings>(builder.Configuration.GetSection("MongoDBSettings"));
builder.Services.AddSingleton<GroupService>();
builder.Services.AddSingleton<ExpenseService>();

//builder.Services.AddControllers();




// Add services to the container.
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
builder.Services.AddControllers();

builder.Services.AddSingleton<IUserService, UserService>();

IConfiguration configuration = new ConfigurationBuilder()
    .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
    .AddJsonFile("appsettings.json")
    .Build();


//var mongoclient = new MongoClient(configuration.GetConnectionString("mongodb+srv://anjaliaroraa908:expensesplitter@cluster0.bmxdz.mongodb.net/"));
//builder.Services.AddSingleton<IMongoClient>(mongoclient);




// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
});


builder.Services.AddControllers();

// Register MongoDB Client
builder.Services.AddSingleton<IMongoClient, MongoClient>(sp =>
    new MongoClient("mongodb+srv://anjaliaroraa908:expensesplitter@cluster0.bmxdz.mongodb.net/"));  // Replace with your MongoDB connection string.

// Register custom services
builder.Services.AddSingleton<GroupService>();
builder.Services.AddSingleton<ExpenseService>();



var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}



app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");
app.UseCors("AllowAllOrigins");
app.Run();
