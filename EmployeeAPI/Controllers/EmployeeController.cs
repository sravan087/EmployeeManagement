using EmployeeAPI.Models;
using System;
using System.Collections.Generic;
using System.Web.Http;

namespace EmployeeAPI.Controllers
{
   [Authorize]   
    public class EmployeeController : ApiController
    {
        
        [HttpGet]
        public IHttpActionResult GetEmployees()
        {
            var result = new List<Person>() {
                new Person() { Id = 100, FirstName  = "Sam",LastName = "Kal", DateofBirth=new DateTime(1987,06,15), Email = "test@gmail.com", Gender = "M" },
                new Person() { Id = 100, FirstName  = "Jennifer",LastName = "Lopez", DateofBirth=new DateTime(1965,04,5), Email = "test1@gmail.com", Gender = "F" },
                new Person() { Id = 100, FirstName  = "Pavan",LastName = "Kalyan", DateofBirth=new DateTime(1999,01,10), Email = "test2@gmail.com", Gender = "M" },
                new Person() { Id = 100, FirstName  = "Samantha",LastName = "RuthPrabhu", DateofBirth=new DateTime(1979,9,22), Email = "test3@gmail.com", Gender = "F" },
                new Person() { Id = 100, FirstName  = "Sachin",LastName = "Tendulkar", DateofBirth=new DateTime(2000,07,25), Email = "test4@gmail.com", Gender = "M" }
            };

            return Ok(result);
        }
    }
}
