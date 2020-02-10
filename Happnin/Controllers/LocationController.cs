﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Happnin.ClientApi;
using Microsoft.AspNetCore.Mvc;

namespace Happnin.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LocationController : Controller
    {
        private IHttpClientFactory ClientFactory { get; }

        public LocationController(IHttpClientFactory clientFactory)
        {
            ClientFactory = clientFactory ?? throw new ArgumentNullException(nameof(clientFactory));
        }

        // GET: Event
        [HttpGet]
        public async Task<IEnumerable<Location>> Get()
        {
            var httpClient = ClientFactory.CreateClient("Happnin.Api");
            var client = new LocationClient(httpClient);
            ICollection<Location> locations = await client.GetAllAsync();
            return locations; 
        } 

    }
}