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

        public List<StockcardMovement> FindByProductId(int tenantId, string productId)
        {
            return StockCardMovementCollection.Find(Query.And(
                Query.EQ("TenantId", tenantId),
                Query.EQ("ItemId", productId))).ToList();
        }

        private MongoCollection<StockcardMovement> StockCardMovementCollection
        {
            get
            {
                return mongoDb.GetCollection<StockcardMovement>("inventoryentry");
            }
        }
    }
}