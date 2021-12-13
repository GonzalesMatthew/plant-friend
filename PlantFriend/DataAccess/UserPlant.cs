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

        internal void Add(UserPlant newUserPlant)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"insert into UserPlant (PlantId, UserId, [Status], PetName, DateCreated, InitialAgeDays, AgeStage)
                        output inserted.Id
                        values (@plantId, @userId, @status, @petName, GETDATE(), @initialAgeDays, @ageStage)";
            var id = db.ExecuteScalar<Guid>(sql, newUserPlant);
            newUserPlant.Id = id;
        }

        internal UserPlant GetById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"select * from UserPlant where Id = @id";
            var userPlant = db.QuerySingleOrDefault<UserPlant>(sql, new { id });
            return userPlant;
        }

        internal UserPlant UpdateUserPlant(Guid id, UserPlant userPlant)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"update UserPlant
                        set 
                            PlantId = @plantId,
                            UserId = @userId, 
                            [Status] = @status, 
                            PetName = @petName, 
                            DateCreated = @dateCreated, 
                            InitialAgeDays = @initialAgeDays, 
                            AgeStage = @ageStage
                        output inserted.*
                        where Id = @id";
            userPlant.Id = id;
            var updatedUserPlant = db.QuerySingleOrDefault<UserPlant>(sql, userPlant);
            return updatedUserPlant;
        }

        internal void Remove(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Delete
                        From UserPlant
                        Where Id = @id";
            db.Execute(sql, new { id });
        }
    }
}
