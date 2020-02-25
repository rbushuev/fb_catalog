using FootballManager.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FootballManager.Context
{
    public class FbManagerContext : DbContext
    {
        public FbManagerContext(DbContextOptions<FbManagerContext> options)
            : base(options)
        {
        }

        public DbSet<Footballer> Footballers { get; set; }

        public DbSet<Team> Teams { get; set; }
    }
}
