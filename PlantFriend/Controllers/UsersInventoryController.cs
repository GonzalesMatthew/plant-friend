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
    [Route("api/usersInventory")]
    [ApiController]
    public class UsersInventoryController : ControllerBase
    {
        UserInventoryRepo _userInventoryRepo;

        public UsersInventoryController(UserInventoryRepo userInventoryRepo)
        {
            _userInventoryRepo = userInventoryRepo;
        }

        [HttpGet]
        public IActionResult GetAllUserInventorys()
        {
            return Ok(_userInventoryRepo.GetAll());
        }

        [HttpPost]
        public IActionResult AddUserInventory(UserInventory newUserInventory)
        {
            if (newUserInventory.UserId == Guid.Empty)
            {
                return BadRequest("UserId is a required field.");
            }
            _userInventoryRepo.Add(newUserInventory);
            return Created($"/api/usersInventory/{newUserInventory.Id}", newUserInventory);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            var userInventory = _userInventoryRepo.GetById(id);
            if (userInventory == null)
            {
                return NotFound($"No userInventory with the id {id} was found.");
            }
            return Ok(userInventory);
        }

        [HttpPut("{id})")]
        public IActionResult UpdateUserInventory(Guid id, UserInventory userInventory)
        {
            var userInventoryToUpdate = _userInventoryRepo.GetById(id);
            if (userInventoryToUpdate == null)
            {
                NotFound("This userInventory was not found.");
            }
            var updatedUserInventory = _userInventoryRepo.UpdateUserInventory(id, userInventory);
            return Ok(updatedUserInventory);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUserInventory(Guid id)
        {
            _userInventoryRepo.Remove(id);
            return Ok("UserInventory successfully removed.");
        }
    }
}
