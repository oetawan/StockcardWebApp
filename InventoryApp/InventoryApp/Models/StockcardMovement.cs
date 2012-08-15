using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
namespace InventoryApp.Models
{
    public class StockcardMovement
    {
        public string id { get; set; }
        public int TenantId { get; set; }
        public string TransactionNumber { get; set; }
        public DateTime Date { get; set; }
        public DateTime OriginalDate { get; set; }
        public string ItemId { get; set; }
        public string ItemCode { get; set; }
        public string ItemBarcode { get; set; }
        public string ItemName { get; set; }
        public double Qty { get; set; }
        public string InvType { get; set; }
        public string TransctionType { get; set; }
        public double Balance { get; set; }
        public string DateString { get; set; }
    }

    public class StockcardMovementComparer : IComparer<StockcardMovement>
    {
        public int Compare(StockcardMovement x, StockcardMovement y)
        {
            return x.Date == y.Date ? 0 : x.Date < y.Date ? -1 : 1;
        }
    }
}