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
    public class UserRepo
    {
        readonly string _connectionString;
        public UserRepo(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("PlantFriend");
        }

        internal IEnumerable<User> GetAll()
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"select * from [User]";
            var users = db.Query<User>(sql);
            return users;
        }

        internal void Add(User newUser)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"insert into [User] (FirebaseId, [Admin], FirstName, LastName, Email, ImageUrl, DateCreated)
                        output inserted.Id
                        values (@firebaseId, @admin, @firstName, @lastName, @email, @imageUrl, GETDATE())";
            var id = db.ExecuteScalar<Guid>(sql, newUser);
            newUser.Id = id;
        }

        internal User GetById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"select * from [User] where Id = @id";
            var user = db.QuerySingleOrDefault<User>(sql, new { id });
            return user;
        }

        internal User UpdateUser(Guid id, User user)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"update [User]
                        set 
	                        [Admin] = @admin,
	                        FirstName = @firstName,
	                        LastName = @lastName,
	                        Email = @email, 
	                        ImageUrl = @imageUrl,
	                        DateCreated = @DateCreated
                        output inserted.*
                        where Id = @id";
            user.Id = id;
            var updatedUser = db.QuerySingleOrDefault<User>(sql, user);
            return updatedUser;
        }

        internal void Remove(Guid id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"Delete
                        From [User]
                        Where Id = @id";
            db.Execute(sql, new { id });
        }
    }
}
