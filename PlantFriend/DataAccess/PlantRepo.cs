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
    public class PlantRepo
    {
        string _connectionString;
        public PlantRepo(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("PlantFriend");
        }

        internal IEnumerable<Plant> GetAll()
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"select * from Plant";
            var plants = db.Query<Plant>(sql);
            return plants;
        }
    }
}
