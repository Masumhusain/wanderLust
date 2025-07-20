
  let maptoken = mapToken;
  console.log(maptoken);
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
	container: 'map', // container ID
	center: listing.geometry.coordinates, // starting position [lng, lat]
	zoom: 9, // starting zoom
});


   const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`<h2 class="tb-0">${listing.location}</h2><p>exact location provided by wanderlust</p>`) ;

const marker = new mapboxgl.Marker(  {color: "red"})
        .setLngLat(listing.geometry.coordinates)
		.setPopup(popup)
.addTo(map);