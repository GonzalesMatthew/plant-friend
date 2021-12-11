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
    }
}
