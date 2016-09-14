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

        // GET: api/Tests
        public IEnumerable<Foo> Get()
        {
            var q = Data.Foos;

            return q.ToList();
        }

        // GET: api/Tests/5
        public IHttpActionResult Get(int id)
        {
            var foo = Data.Foos.Find(id);
            if (foo == null)
            {
                return NotFound();
            }

            return Ok(foo);
        }

        // POST: api/Tests
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

        // PUT: api/Tests/5
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

        // DELETE: api/Tests/5
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
