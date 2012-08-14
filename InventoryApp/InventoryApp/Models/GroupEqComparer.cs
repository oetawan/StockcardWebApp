using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
namespace InventoryApp.Models
{
    public class GroupEqComparer : IEqualityComparer<Group>
    {
        public bool Equals(Group x, Group y)
        {
            return x.GroupCode == y.GroupCode;
        }

        public int GetHashCode(Group g)
        {
            return g.id.GetHashCode();
        }
    }
}