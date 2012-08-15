using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
namespace InventoryApp.Models
{
    public class StockcardMovementRepository
    {
        MongoDatabase mongoDb;
        public StockcardMovementRepository()
        {
            mongoDb = MongoDatabase.Create(System.Configuration.ConfigurationManager.AppSettings["MONGOSVR_URL"]);
        }

        public List<StockcardMovement> FindByProductId(int tenantId, string productId, string period)
        {
            return StockCardMovementCollection.Find(Query.And(
                Query.EQ("TenantId", tenantId),
                Query.EQ("ItemId", productId),
                Query.GTE("Date", ParseDate(period)))).ToList();
        }

        private MongoCollection<StockcardMovement> StockCardMovementCollection
        {
            get
            {
                return mongoDb.GetCollection<StockcardMovement>("inventoryentry");
            }
        }

        private DateTime ParseDate(string period)
        {
            int year = int.Parse(period.Substring(0, 4));
            int month = int.Parse(period.Substring(4, 2));
            return new DateTime(year, month, 1);
        }
    }
}