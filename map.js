
var map = L.map('map').setView([51.505, -0.09], 13); // Set initial map view and zoom level

// Add the base tile layer (you can use different tile layers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add markers for buildings or landmarks
var marker1 = L.marker([51.5, -0.09]).addTo(map);
marker1.bindPopup("<b>Building 1</b>").openPopup();

var marker2 = L.marker([51.51, -0.1]).addTo(map);
marker2.bindPopup("<b>Building 2</b>").openPopup();
