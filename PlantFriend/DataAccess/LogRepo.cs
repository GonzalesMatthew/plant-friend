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

        internal void Add(Log newLog)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"insert into [Log] (UserPlantId, DateCreated, EntryNumber, [Entry], EntryDate)
                        output inserted.Id
                        values (@userPlantId, GETDATE(), @entryNumber, @entry, GETDATE())";
            var id = db.ExecuteScalar<Guid>(sql, newLog);
            newLog.Id = id;
        }

        internal Log GetById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"select * from Log where Id = @id";
            var log = db.QuerySingleOrDefault<Log>(sql, new { id });
            return log;
        }

        internal object GetAllByUserPlantId(Guid userPlantId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"select * from Log where UserPlantId = @userPlantId";
            var logs = db.Query<Log>(sql, new { userPlantId });
            return logs;
        }

        internal Log UpdateLog(Guid id, Log log)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"update Log
                        set 
                            EntryNumber = @entryNumber, 
                            [Entry] = @entry, 
                            EntryDate = @entryDate
                        output inserted.*
                        where Id = @id";
            log.Id = id;
            var updatedLog = db.QuerySingleOrDefault<Log>(sql, log);
            return updatedLog;
        }

        internal void Remove(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Delete
                        From Log
                        Where Id = @id";
            db.Execute(sql, new { id });
        }
    }
}
