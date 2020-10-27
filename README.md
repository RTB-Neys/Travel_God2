# Travel_God2

Title : Travel God

Prob Statement: The tourist industry is booming but the problem is, who knows what to do? where to go? what weather will you face? Our application is a one stop shop and a travel buffs dream. Events, weather and local data to assist with any itinerary.

Discript: Travel god aims to make the act of seeing whats happening at a given area easier.... check out a map of the area, a 7 day weather forcecast , 'important locations', events, and come back to check if updates have been made later (all searches are saved in local storage)

APIs: Google Maps, Ticketmaster, Open Weather API 

$("events").append($(`
                <div class="col s3 m3">
                    <div class="card ">
                        <div class="card-image">
                            <img src="images/sample-1.jpg">
                            <span class="card-title blue-grey-text text-darken-4">${eventName}</span>
                        </div>
                        <div class="card-content">
                            <p>Event description</p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>`))