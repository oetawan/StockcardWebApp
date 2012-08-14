using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using InventoryApp.Models;

namespace InventoryApp.Controllers
{
    public class GroupController : ApiController
    {
        // GET api/group/5
        public IEnumerable<Group> Get()
        {
            int tenantId = int.Parse(this.Request.RequestUri.Query.Remove(0, 1).Split('=')[1]);
            return new GroupRepository().FindAllGroupByTenantId(tenantId);
        }
    }
}