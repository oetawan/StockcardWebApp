using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
namespace InventoryApp.Models
{
    public class Group
    {
        public string id { get; set; }
        public string GroupName { get; set; }
        public string GroupCode { get; set; }

        public override bool Equals(object obj)
        {
            if (!(obj is Group)) return false;
            if (Object.ReferenceEquals(this, obj)) return true;
            Group that = (Group)obj;
            return this.GroupCode == that.GroupCode;
        }
        public override int GetHashCode()
        {
            return 0;
        }
    }
}