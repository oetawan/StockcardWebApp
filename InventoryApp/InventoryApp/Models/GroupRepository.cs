using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
namespace InventoryApp.Models
{
    public class GroupRepository
    {
        MongoDatabase mongoDb;
        public GroupRepository()
        {
            mongoDb = MongoDatabase.Create(System.Configuration.ConfigurationManager.AppSettings["MONGOSVR_URL"]);
        }

        public IList<Group> FindAllGroupByTenantId(int tenantId)
        {
            var groups = StockCardSnapshotCollection.Find(Query.EQ("TenantId", tenantId)).SetFields(
                new string[3] { "id", "GroupCode", "GroupName" }).Distinct<Group>().ToList();
            return groups;
        }

        private MongoCollection<Group> StockCardSnapshotCollection
        {
            get
            {
                return mongoDb.GetCollection<Group>("StockCardSnapshot");
            }
        }
    }
}