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
        readonly string _connectionString;
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

        internal void Add(UserInventory newUserInventory)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"insert into UserInventory(UserId, Quantity, [Name], [Description])
                        output inserted.Id
                        values (@userId, @quantity, @name, @description)";
            var id = db.ExecuteScalar<Guid>(sql, newUserInventory);
            newUserInventory.Id = id;
        }

        internal UserInventory GetById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"select * from UserInventory where Id = @id";
            var userInventory = db.QuerySingleOrDefault<UserInventory>(sql, new { id });
            return userInventory;
        }

        internal UserInventory UpdateUserInventory(Guid id, UserInventory userInventory)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"update UserInventory
                        set 
                            Quantity = @quantity, 
                            [Name] = @name, 
                            [Description] = @description
                        output inserted.*
                        where Id = @id";
            userInventory.Id = id;
            var updatedUserInventory = db.QuerySingleOrDefault<UserInventory>(sql, userInventory);
            return updatedUserInventory;
        }

        internal void Remove(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Delete
                        From UserInventory
                        Where Id = @id";
            db.Execute(sql, new { id });
        }
    }
}
