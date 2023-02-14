using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using WebAPI.DataComponents;
using WebAPI.Models;

namespace WebAPI.Controllers

{
    [EnableCors("*","*","*","*")]
    public class TourismController : ApiController
    {
        private readonly Entities dbContext = new Entities();

        [ResponseType(typeof(List<Place>))]
        public async Task<IHttpActionResult> GetAllPlaces()
        {
            var data = dbContext.Tourism.Select((p)=> new Place
            { 
            PlaceID = p.PlaceID, Description = p.Description, Name = p.Name, Pincode = p.Pincode, Significance = p.Significance, State = p.State
            }).ToList();
            return await Task.Run<IHttpActionResult>(() => Ok(data));
        }

        [ResponseType(typeof(List<Place>))]
        public async Task<IHttpActionResult> GetPlace(int id)
        {
            var data = dbContext.Tourism.FirstOrDefault((pl) => pl.PlaceID == id);
            var place = new Place
            {
                PlaceID = data.PlaceID,
                Description = data.Description,
                Name = data.Name,
                Pincode = data.Pincode,
                Significance = data.Significance,
                State = data.State
            };
            return await Task.Run<IHttpActionResult>(() => Ok(place));

        }

        [ResponseType(typeof(List<Images>))]
        [Route("api/Places/Images/{id}")]
        public async Task<IHttpActionResult> GetImages(int id)
        {
            var data = dbContext.ImageFiles.Where((f) => f.PlaceID == id).Select(f => new Images
            {
                EntryID = f.EntryID,
                ImageSource = f.ImageSource,
                PlaceID = f.PlaceID
            }).ToList();
            return await Task.Run<IHttpActionResult>(() => Ok(data));
        }

        [ResponseType(typeof(Place))]
        [HttpPost]
        public async Task<IHttpActionResult> AddPlace(Place place)
        {
            var tPlace = new Tourism
            {
                Description = place.Description,
                Name = place.Name,
                Pincode = place.Pincode,
                Significance = place.Significance,
                State = place.State
            };
            dbContext.Tourism.Add(tPlace);
            dbContext.SaveChanges();
            place.PlaceID = tPlace.PlaceID;
            return await Task.Run<IHttpActionResult>(() => Ok(place));
        }

        [HttpPost]
        [Route("api/Images/{id}")]
        public async Task<IHttpActionResult> AddImages(int id, Images file)
        {
            var imgFile = new ImageFile
            {
                ImageSource = file.ImageSource,
                PlaceID = file.PlaceID
            };
            dbContext.ImageFiles.Add(imgFile);
            dbContext.SaveChanges();
            return await Task.Run<IHttpActionResult>(() => Ok());
        }
    }
}
