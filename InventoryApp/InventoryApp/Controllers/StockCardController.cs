using System.Collections.Generic;
using System.Web.Http;
using InventoryApp.Models;

namespace InventoryApp.Controllers
{
    public class StockCardController : ApiController
    {
        // GET api/stockcard
        public IEnumerable<StockCard> Get()
        {
            string[] queryStrings = this.Request.RequestUri.Query.Remove(0, 1).Split('&');
            int tenantId = int.Parse(queryStrings[0].Split('=')[1]);
            string groupCode = queryStrings[1].Split('=')[1];

            List<StockCard> result = new StockCardRepository().FindByGroup(tenantId, groupCode);
            result.Sort(new StockCardAscOrder());
            return result;
        }
    }
}