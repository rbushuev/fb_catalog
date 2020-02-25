using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FootballManager.SignalR
{
    public interface IHubClient
    {
        Task BroadcastMessage();
    }
}
