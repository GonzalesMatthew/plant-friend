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
        UserPlant Map(UserPlant userPlant, Plant plant)
        {
            userPlant.Plant = plant;
            return userPlant;
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

        internal object GetAllByUserId(Guid userId)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"select * 
                        from UserPlant up
	                        left join Plant u on up.PlantId = u.Id
                        where UserId = @userId";
            var usersPlants = db.Query<UserPlant, Plant, UserPlant>(sql, Map,  new { userId });
            return usersPlants;
        }

        internal UserPlant GetById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"select * from UserPlant where Id = @id";
            var userPlant = db.QuerySingleOrDefault<UserPlant>(sql, new { id });
            var plant = db.QuerySingleOrDefault<Plant>("select * from plant where id = @id", new { id = userPlant.PlantId });
            userPlant.Plant = plant;

            return userPlant;
        }

        internal UserPlant UpdateUserPlant(Guid id, UserPlant userPlant)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"update UserPlant
                        set 
                            [Status] = @status, 
                            PetName = @petName, 
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
            var logSql = @"Delete From Log Where UserPlantId = @id";
            db.Execute(logSql, new { id });

            var userPlantSql = @"Delete
                        From UserPlant
                        Where Id = @id";
            db.Execute(userPlantSql, new { id });
        }
    }
}
