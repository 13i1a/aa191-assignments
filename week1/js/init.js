// Initialize the map
const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL', // Your style URL
    center: [-73.9683, 40.7999], // Starting position [lng, lat]
    zoom: 0 // Starting zoom level
});


// Add a marker to the map
new maplibregl.Marker()
    .setLngLat([-73.9683, 40.7999])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('10025: <br>  My Zipcode! '))
    .addTo(map);
// Add a marker to the map
new maplibregl.Marker()
    .setLngLat([-73.9801, 40.7473])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML('Global Kids: <br>  A non-profit I used to volunteer at! '))
    .addTo(map);
// Add a marker to the map
new maplibregl.Marker()
    .setLngLat([-122.6784, 45.5152])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML("My Grandma's House! <br> Portland, Oregon "))
    .addTo(map);  
// Add a marker to the map
new maplibregl.Marker()
    .setLngLat([102.1387, 19.8833])
    .setPopup(new maplibregl.Popup({ offset: 25 }) // Add popups
        .setHTML("Luang Prabang: <br>  One of my favorite places I've travelled! "))
    .addTo(map);
    