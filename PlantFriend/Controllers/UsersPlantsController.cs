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
    [Route("api/usersPlants")]
    [ApiController]
    public class UsersPlantsController : ControllerBase
    {
        UserPlantRepo _userPlantRepo;

        public UsersPlantsController(UserPlantRepo userPlantRepo)
        {
            _userPlantRepo = userPlantRepo;
        }

        [HttpGet]
        public IActionResult GetAllUserPlantss()
        {
            return Ok(_userPlantRepo.GetAll());
        }

        [HttpPost]
        public IActionResult AddUserPlant(UserPlant newUserPlant)
        {
            if ((newUserPlant.PlantId == Guid.Empty) || (newUserPlant.UserId == Guid.Empty))
            {
                return BadRequest("PlantId and UserId are required fields.");
            }
            _userPlantRepo.Add(newUserPlant);
            return Created($"/api/usersPlants/{newUserPlant.Id}", newUserPlant);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            var userPlant = _userPlantRepo.GetById(id);
            if (userPlant == null)
            {
                return NotFound($"No userPlant with the id {id} was found.");
            }
            return Ok(userPlant);
        }

        [HttpPut("{id})")]
        public IActionResult UpdateUserPlant(Guid id, UserPlant userPlant)
        {
            var userPlantToUpdate = _userPlantRepo.GetById(id);
            if (userPlantToUpdate == null)
            {
                NotFound("This userPlant was not found.");
            }
            var updatedUserPlant = _userPlantRepo.UpdateUserPlant(id, userPlant);
            return Ok(updatedUserPlant);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUserPlant(Guid id)
        {
            _userPlantRepo.Remove(id);
            return Ok("UserPlant successfully removed.");
        }
    }
}
