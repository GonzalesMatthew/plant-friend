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
    public class UserPlantRepo
    {
        readonly string _connectionString;
        public UserPlantRepo(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("PlantFriend");
        }

        internal IEnumerable<UserPlant> GetAll()
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"select * from UserPlant";
            var usersPlants = db.Query<UserPlant>(sql);
            return usersPlants;
        }
    }
}
