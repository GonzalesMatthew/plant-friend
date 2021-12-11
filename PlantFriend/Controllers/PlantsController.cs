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
    [Route("api/plants")]
    [ApiController]
    public class PlantsController : ControllerBase
    {
        readonly PlantRepo _plantRepo;

        public PlantsController(PlantRepo plantRepo)
        {
            _plantRepo = plantRepo;
        }

        [HttpGet]
        public IActionResult GetAllPlants()
        {
            return Ok(_plantRepo.GetAll());
        }

        [HttpPost]
        public IActionResult AddPlant(Plant newPlant)
        {
            if (string.IsNullOrEmpty(newPlant.Name) || string.IsNullOrEmpty(newPlant.ImageUrl))
            {
                return BadRequest("Name and ImageUrl are required fields.");
            }
            _plantRepo.Add(newPlant);
            return Created($"/api/plants/{newPlant.Id}", newPlant);
        }
    }
}
