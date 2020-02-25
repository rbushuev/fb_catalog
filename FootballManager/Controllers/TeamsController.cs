using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FootballManager.Context;
using FootballManager.Models;

namespace FootballManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamsController : ControllerBase
    {
        private readonly FbManagerContext _context;

        public TeamsController(FbManagerContext context)
        {
            _context = context;
        }

        // GET: api/teams
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Team>>> Get()
        {
            return await _context.Teams.ToListAsync();
        }

        // POST: api/teams
        [HttpPost]
        public async Task<ActionResult<Team>> Post(Team team)
        {
            _context.Teams.Add(new Team(){ Name = team.Name });
            await _context.SaveChangesAsync();
            return Ok(team);
        }
    }
}
