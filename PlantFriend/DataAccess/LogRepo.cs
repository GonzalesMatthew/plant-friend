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
    public class LogRepo
    {
        readonly string _connectionString;
        public LogRepo(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("PlantFriend");
        }

        internal IEnumerable<Log> GetAll()
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"select * from Log";
            var logs = db.Query<Log>(sql);
            return logs;
        }
    }
}
