using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatX
{
    public class ChatHub: Hub
    {
        public async Task SendMessage(string user, string message)  // hangi kull hangi mesajı gönd
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message); //bunu tüm clientlara gönder.
        }
    }
}
