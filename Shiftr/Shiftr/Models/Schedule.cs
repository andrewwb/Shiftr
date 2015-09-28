using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Shiftr.Models {
    public class Schedule {
        public int Id { get; set; }
        public IList<Shift> Shifts { get; set; }

    }
}