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

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            var plant = _plantRepo.GetById(id);
            if (plant == null)
            {
                return NotFound($"No plant with the id {id} was found.");
            }
            return Ok(plant);
        }

        [HttpPut("{id})")]
        public IActionResult UpdatePlant(Guid id, Plant plant)
        {
            var plantToUpdate = _plantRepo.GetById(id);
            if (plantToUpdate == null)
            {
                NotFound("This plant was not found.");
            }
            var updatedPlant = _plantRepo.UpdatePlant(id, plant);
            return Ok(updatedPlant);
        }

        [HttpDelete("{id}")]
        public IActionResult DeletePlant(Guid id)
        {
            _plantRepo.Remove(id);
            return Ok("Plant successfully removed.");
        }
    }
}
