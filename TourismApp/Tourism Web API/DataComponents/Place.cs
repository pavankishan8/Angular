using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.DataComponents
{
    public class Place
    {
        public int PlaceID { get; set; }
        public string Name { get; set; }
        public long Pincode { get; set; }
        public string State { get; set; }
        public string Significance { get; set; }
        public string Description { get; set; }

    }

    public class Images
    {
        public int EntryID { get; set; }
        public int PlaceID { get; set; }
        public string ImageSource { get; set; }
    }
}