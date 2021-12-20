using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlantFriend.Models
{
    public class UserPlant
    {
        public Guid Id { get; set; }
        public Guid PlantId { get; set; }
        public Guid UserId { get; set; }
        public string Status { get; set; }
        public string PetName { get; set; }
        public DateTime DateCreated { get; set; }
        public int InitialAgeDays { get; set; }
        public string AgeStage { get; set; }
    }
}
