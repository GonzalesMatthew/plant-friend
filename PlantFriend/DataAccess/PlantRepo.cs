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
        readonly string _connectionString;
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

        internal void Add(Plant newPlant)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"insert into Plant(Name, Light, Water, WaterFrequency, Temperature, Nutrients, NutrientsFrequency, Description, CareNeeds, ImageUrl)
                        output inserted.Id
                        values (@name, @light, @water, @waterFrequency, @temperature, @nutrients, @nutrientsFrequency, @description, @careNeeds, @imageUrl)";
            var id = db.ExecuteScalar<Guid>(sql, newPlant);
            newPlant.Id = id;
        }

        internal Plant GetById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"select * from Plant where Id = @id";
            var plant = db.QuerySingleOrDefault<Plant>(sql, new { id });
            return plant;
        }

        internal Plant UpdatePlant(Guid id, Plant plant)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"update Plant
                        set 
                            Name = @name,
                            Light = @light, 
                            Water = @water, 
                            WaterFrequency = @waterFrequency, 
                            Temperature = @temperature, 
                            Nutrients = @nutrients, 
                            NutrientsFrequency = @nutrientsFrequency, 
                            Description = @description,
                            CareNeeds = @careNeeds,
                            ImageUrl = @imageUrl
                        output inserted.*
                        where Id = @id";
            plant.Id = id;
            var updatedPlant = db.QuerySingleOrDefault<Plant>(sql, plant);
            return updatedPlant;
        }

        internal void Remove(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Delete
                        From Plant
                        Where Id = @id";
            db.Execute(sql, new { id });
        }
    }
}
