using Kash.JSTSUT.Web.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Kash.JSTSUT.Web.DAL
{
    public class DataContext : DbContext
    {
        public DataContext() : base("DefaultConnection") { }

        public IDbSet<Foo> Foos { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}