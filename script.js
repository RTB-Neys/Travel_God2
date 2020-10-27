// //var settings = {
//     "url": "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=ElWPP9FatyxVq4ke0f4mPT8u3LtGG04m",
//     "method": "GET",
//     "timeout": 0,
//     "headers": {
//       "Content-Type": "text/plain"
//     },
//     "data": "\"id\": \"Events\",",
//   };

//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });



// $("#sbt").on("click", function (e) {

//   var title = $("#inputId").val();
//   var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=ElWPP9FatyxVq4ke0f4mPT8u3LtGG04m"

//   $.ajax({
//     type:"GET",
//     async:true,
//     dataType: "json",
//     url: queryURL
//   }).then(function(response) {
//                 console.log("NICK");
//                 console.log(response);
//                 $("#data").text(JSON.stringify(response))

//                 $("#events").text(response.Events)

//                 })
//   });

//   <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDetV8VooEIj-TiHIIC9V-n23gzBcuS1LQ&callback=initMap"
//   type="text/javascript"></script>

//   // Create the script tag, set the appropriate attributes
// var script = document.createElement('script');
// script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDetV8VooEIj-TiHIIC9V-n23gzBcuS1LQ&callback=initMap';
// script.defer = true;

// // Attach your callback function to the `window` object
// window.initMap = function() {
//   // JS API is loaded and available
// };

// // Append the 'script' element to 'head'
// document.head.appendChild(script);
var getEvents = [];

$.ajax({
  type: "GET",
  url: "https://app.ticketmaster.com/discovery/v2/events.json?size=4&apikey=ElWPP9FatyxVq4ke0f4mPT8u3LtGG04m",
  async: true,
  dataType: "json",
  success: function(json) {
    getEvents.json = json;
    showEvents(json);
    console.log(json);
   },
error: function(xhr, status, err) {
    console.log(err);
   }
});



// function showPosition(position) {
//   var x = document.getElementById("location");
//   x.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude; 
//   var latlon = position.coords.latitude + "," + position.coords.longitude;


//   $.ajax({
//     type:"GET",
//     url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=pLOeuGq2JL05uEGrZG7DuGWu6sh2OnMz&latlong="+latlon,
//     async:true,
//     dataType: "json",
//     success: function(json) {
//                 console.log(json);
//                 var e = document.getElementById("events");
//                 e.innerHTML = json.page.totalElements + " events found.";
//                 showEvents(json);
//                 initMap(position, json);
//              },
//     error: function(xhr, status, err) {
//                 console.log(err);
//              }
//   });

// }


function showEvents(json) {
  var items = $('#events .list-group-item');
  items.hide();
  var events = json._embedded.events;
  var item = items.first();
  for (var i=0;i<events.length;i++) {
    item.children('.list-group-item-heading').text(events[i].name);
    item.children('.list-group-item-text').text(events[i].dates.start.localDate);
    item.children('.list-group-url').text(events[i].url);
    try {
      item.children('.venue').text(events[i]._embedded.venues[0].name + events[i]._embedded.venues[0].images[2] + " in " + events[i]._embedded.venues[0].city.name + 
      " url " + events[i]._embedded.venues[0].url);
    } catch (err) {
      console.log(err);
    }
    item.show();
    item.off("click");
    item.click(events[i], function(eventObject) {
      console.log(eventObject.data);
      try {
        getAttraction(eventObject.data._embedded.attractions[0].id);
      } catch (err) {
      console.log(err);
      }
    });
    item=item.next();
  }
}
