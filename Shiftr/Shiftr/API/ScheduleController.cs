using Shiftr.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Shiftr.API
{
    [Route("api/shift", Name ="ShiftAPI")]
    public class ScheduleController : ApiController
    {
        private IRepository _repo;
        public ScheduleController(IRepository repo) {
            _repo = repo;
        }

        public IEnumerable<Schedule> Get() {
            return _repo.Query<Schedule>().ToList();
        }

        public Schedule Get(int id) {
            return _repo.Find<Schedule>(id);
        }

        public HttpResponseMessage Post(Shift shift) {
            if (ModelState.IsValid) {
                if (shift.Id == 0) {
                    _repo.Add<Shift>(shift);
                    _repo.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, shift);
                }
                else {
                    var dbShift = _repo.Find<Shift>(shift.Id);
                    dbShift.StartShift = shift.StartShift;
                    dbShift.EndShift = shift.EndShift;
                    dbShift.Employee = shift.Employee;
                    _repo.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, shift);
                }
            }
            else {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, this.ModelState);
            }
        }
    }
}
