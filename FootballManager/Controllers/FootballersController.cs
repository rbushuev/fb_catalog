using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using FootballManager.Context;
using FootballManager.Models;
using FootballManager.SignalR;

namespace FootballManager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FootballersController : ControllerBase
    {
        private readonly FbManagerContext _context;
        private readonly IHubContext<BroadcastHub, IHubClient> _hubContext;

        public FootballersController(FbManagerContext context, IHubContext<BroadcastHub, IHubClient> hubContext)
        {
            _context = context;
            _hubContext = hubContext;
        }

        // GET: api/Footballers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Footballer>>> Get()
        {
            return await _context.Footballers.Include(x => x.Team).ToListAsync();
        }

        // POST: api/footballers
        [HttpPost]
        public async Task<ActionResult<Footballer>> PostFootballer(Footballer footballer)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    _context.Footballers.Add(footballer);
                    await _context.SaveChangesAsync();
                    await _hubContext.Clients.All.BroadcastMessage();
                }
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPut]
        public async Task<IActionResult> PutFootballer(Footballer footballer)
        {
            _context.Entry(footballer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
                await _hubContext.Clients.All.BroadcastMessage();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
