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

        [HttpPost]
        public IActionResult AddLog(Log newLog)
        {
            if (newLog.UserPlantId == Guid.Empty)
            {
                return BadRequest("UserPlantId is a required field.");
            }
            _logRepo.Add(newLog);
            return Created($"/api/logs/{newLog.Id}", newLog);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            var log = _logRepo.GetById(id);
            if (log == null)
            {
                return NotFound($"No log with the id {id} was found.");
            }
            return Ok(log);
        }

        [HttpPut("{id})")]
        public IActionResult UpdateLog(Guid id, Log log)
        {
            var logToUpdate = _logRepo.GetById(id);
            if (logToUpdate == null)
            {
                NotFound("This log was not found.");
            }
            var updatedLog = _logRepo.UpdateLog(id, log);
            return Ok(updatedLog);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteLog(Guid id)
        {
            _logRepo.Remove(id);
            return Ok("Log successfully removed.");
        }
    }
}
