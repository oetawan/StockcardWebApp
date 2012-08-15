using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
namespace InventoryApp.Models
{
    public class StockCard
    {
        public string id { get; set; }
        public int TenantId { get; set; }
        public string Period { get; set; }
        public string ProductId { get; set; }
        public string ProductCode { get; set; }
        public string Barcode { get; set; }
        public string ProductName { get; set; }
        public string GroupCode { get; set; }
        public string GroupName { get; set; }
        public double OpeningBalance { get; set; }
        public double Balance { get; set; }
    }
}