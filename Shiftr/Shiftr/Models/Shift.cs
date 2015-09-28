using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Shiftr.Models {
    public class Shift {
        public int Id { get; set; }
        public DateTime StartShift { get; set; }
        public DateTime EndShift { get; set; }
        public ApplicationUser Employee { get; set; }

    }
}