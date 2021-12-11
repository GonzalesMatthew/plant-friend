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
    [Route("api/logs")]
    [ApiController]
    public class LogsController : ControllerBase
    {
        readonly LogRepo _logRepo;

        public LogsController(LogRepo logRepo)
        {
            _logRepo = logRepo;
        }

        [HttpGet]
        public IActionResult GetAllLogs()
        {
            return Ok(_logRepo.GetAll());
        }
    }
}
