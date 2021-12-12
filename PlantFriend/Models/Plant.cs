using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PlantFriend.Models
{
    public class Plant
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Light { get; set; }
        public string Water { get; set; }
        public string WaterFrequency { get; set; }
        public string Temperature { get; set; }
        public string Nutrients { get; set; }
        public string NutrientsFrequency { get; set; }
        public string Description { get; set; }
        public string CareNeeds { get; set; }
        public string ImageUrl { get; set; }
    }
}
