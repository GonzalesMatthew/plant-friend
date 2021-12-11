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
    }
}
