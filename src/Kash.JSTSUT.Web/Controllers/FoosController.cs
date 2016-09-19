using Kash.JSTSUT.Web.DAL;
using Kash.JSTSUT.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Kash.JSTSUT.Web.Controllers
{
    public class FoosController : ApiController
    {
        DataContext Data { get; set; }  

        public FoosController()
        {
            Data = new DataContext();
        }

        public IEnumerable<Foo> Get()
        {
            var q = Data.Foos;

            return q.ToList();
        }

        public IHttpActionResult Get(int id)
        {
            var foo = Data.Foos.Find(id);
            if (foo == null)
            {
                return NotFound();
            }

            return Ok(foo);
        }

        [Route("api/Foos/{id}/nextId")]
        public IHttpActionResult GetNextId(int id)
        {
            var fooNext = Data.Foos.OrderBy(f => f.Id).Where(f => f.Id > id).FirstOrDefault();
            if (fooNext != null)
            {
                return Ok(fooNext.Id);
            }
            else
            {
                return NotFound();
            }
        }

        [Route("api/Foos/{id}/previousId")]
        public IHttpActionResult GetPreviousId(int id)
        {
            var fooPrev = Data.Foos.OrderByDescending(f => f.Id).Where(f => f.Id < id).FirstOrDefault();
            if (fooPrev != null)
            {
                return Ok(fooPrev.Id);
            }
            else
            {
                return NotFound();
            }
        }

        [Route("api/Foos/{id}/firstId")]
        public IHttpActionResult GetFirstId()
        {
            var foo = Data.Foos.OrderBy(f => f.Id).FirstOrDefault();

            if (foo != null)
            {
                return Ok(foo.Id);
            }

            return NotFound();
        }

        public IHttpActionResult Post([FromBody]Foo value)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Data.Foos.Add(value);
            Data.SaveChanges();

            var routeData = Request.GetRouteData();
            return CreatedAtRoute(
                "DefaultApi",
                new
                {
                    controller = routeData.Values["controller"],
                    id = routeData.Values["id"],
                },
                value);
        }

        public IHttpActionResult Put(int id, [FromBody]Foo value)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var foo = Data.Foos.Find(id);
            if (foo == null)
            {
                return NotFound();
            }
            foo.Name = value.Name;
            foo.Status = value.Status;

            Data.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        public IHttpActionResult Delete(int id)
        {
            var foo = Data.Foos.Find(id);
            if (foo == null)
            {
                return NotFound();
            }

            Data.Foos.Remove(foo);
            Data.SaveChanges();

            return Ok(foo);
        }

        ~FoosController()
        {
            Data.Dispose();
            Data = null;
        }
    }
}
