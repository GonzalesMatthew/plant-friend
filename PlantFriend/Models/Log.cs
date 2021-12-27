using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PlantFriend.Models
{
    public class Log
    {
        public Guid Id { get; set; }
        public Guid UserPlantId { get; set; }
        public DateTime DateCreated { get; set; }
        public int EntryNumber { get; set; }
        public string Entry { get; set; }
        public DateTime EntryDate { get; set; }
    }
}
