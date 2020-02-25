using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FootballManager.SignalR
{
    public class BroadcastHub : Hub<IHubClient>
    {
    }
}
