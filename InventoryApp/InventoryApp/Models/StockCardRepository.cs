using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Driver;
using MongoDB.Driver.Builders;

namespace InventoryApp.Models
{
    public class StockCardRepository
    {
        MongoDatabase mongoDb;
        public StockCardRepository()
        {
            mongoDb = MongoDatabase.Create(System.Configuration.ConfigurationManager.AppSettings["MONGOSVR_URL"]);
        }

        public List<StockCard> FindByGroup(int tenantId, string groupCode)
        {
            return StockCardSnapshotCollection.Find(Query.And(
                Query.EQ("TenantId", tenantId),
                Query.EQ("GroupCode", groupCode))).SetFields(
                    new string[11] {
                        "_id",
                        "TenantId",
                        "Period",
                        "ProductId",
                        "ProductCode",
                        "Barcode",
                        "ProductName",
                        "GroupCode",
                        "GroupName",
                        "OpeningBalance",
                        "Balance"
                    }
                ).ToList();
        }

        public StockCard FindByProductId(int tenantId, string productId)
        {
            return StockCardSnapshotCollection.Find(Query.And(
                Query.EQ("TenantId", tenantId),
                Query.EQ("ProductId", productId))).SetFields(
                    new string[11] {
                        "_id",
                        "TenantId",
                        "Period",
                        "ProductId",
                        "ProductCode",
                        "Barcode",
                        "ProductName",
                        "GroupCode",
                        "GroupName",
                        "OpeningBalance",
                        "Balance"
                    }).FirstOrDefault();
        }

        private MongoCollection<StockCard> StockCardSnapshotCollection
        {
            get
            {
                return mongoDb.GetCollection<StockCard>("StockCardSnapshot");
            }
        }
    }
}