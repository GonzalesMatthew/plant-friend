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
    }
}
