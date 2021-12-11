using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using PlantFriend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlantFriend.DataAccess
{
    public class UserInventoryRepo
    {
        string _connectionString;
        public UserInventoryRepo(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("PlantFriend");
        }

        internal IEnumerable<UserInventory> GetAll()
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"select * from UserInventory";
            var usersInventory = db.Query<UserInventory>(sql);
            return usersInventory;
        }
    }
}
