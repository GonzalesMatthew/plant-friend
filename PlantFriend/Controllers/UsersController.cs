using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PlantFriend.DataAccess;
using PlantFriend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlantFriend.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        readonly UserRepo _userRepo;

        public UsersController(UserRepo userRepo)
        {
            _userRepo = userRepo;
        }

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            return Ok(_userRepo.GetAll());
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetUsersInventoryByUserId(Guid userId)
        {
            return Ok(_userInventoryRepo.GetAllByUserId(userId));
        }

        [HttpPost]
        public IActionResult AddUser(User newUser)
        {
            if (string.IsNullOrEmpty(newUser.FirebaseId))
            {
                return BadRequest("FirebaseId is required to add User.");
            }
            _userRepo.Add(newUser);
            return Created($"/api/users/{newUser.Id}", newUser);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            var user = _userRepo.GetById(id);
            if (user == null)
            {
                return NotFound($"No user with the id {id} was found.");
            }
            return Ok(user);
        }

        [HttpGet("firebase/{id}")]
        public IActionResult GetByFirebaseId(string id)
        {
            var user = _userRepo.GetByFirebaseId(id);
            if (user == null)
            {
                return NotFound($"No user with the firebase id {id} was found.");
            }
            return Ok(user);
        }

        [HttpPut("{id})")]
        public IActionResult UpdateUser(Guid id, User user)
        {
            var userToUpdate = _userRepo.GetById(id);
            if (userToUpdate == null)
            {
                NotFound("This user was not found.");
            }
            var updatedPlant = _userRepo.UpdateUser(id, user);
            return Ok(updatedPlant);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUser (Guid id)
        {
            _userRepo.Remove(id);
            return Ok("User successfully removed.");
        }
    }
}
