using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using InventoryApp.Models;
namespace InventoryApp.Controllers
{
    public class StockcardMovementController : ApiController
    {
        const string INVENTORY_IN = "In";
        const string INVENTORY_OUT = "Out";
        const string INVENTORY_OPNAME = "Opname";

        // GET api/stockcardmovement
        public IEnumerable<StockcardMovement> Get()
        {
            string[] queryStrings = this.Request.RequestUri.Query.Remove(0, 1).Split('&');
            int tenantId = int.Parse(queryStrings[0].Split('=')[1]);
            string productId = queryStrings[1].Split('=')[1];

            StockCard sc = new StockCardRepository().FindByProductId(tenantId, productId);
            List<StockcardMovement> scMovement = new StockcardMovementRepository().FindByProductId(tenantId, productId);
            CalculateRuningTotal(sc, scMovement);
            
            return scMovement;
        }

        private void CalculateRuningTotal(StockCard sc, List<StockcardMovement> scMovement)
        {
            scMovement.Sort(new StockcardMovementComparer());
            double balance = sc.OpeningBalance;
            scMovement.ForEach(m => {
                double qty = m.InvType == INVENTORY_OUT ? m.Qty * -1 : m.Qty;
                balance += qty;
                m.Balance = balance;
                m.Qty = qty;
                m.DateString = m.Date.ToString("dd-MM-yyyy");
            });
        }
    }
}