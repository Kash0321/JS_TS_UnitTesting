using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Kash.JSTSUT.Web.Models
{
    public class Foo
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(128)]
        public string Name { get; set; }

        [MaxLength(128)]
        public string Status { get; set; }
    }
}