using System;
namespace FootballManager.Models
{
    public class Footballer
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Surname { get; set; }

        public string Gender { get; set; }

        public DateTime Birthday { get; set; }

        public string Country { get; set; }

        public int TeamId { get; set; }
        public Team Team { get; set; }
    }
}
