// Initialize the map
const map = L.map('map').setView([35.6895, 51.3890], 10); // Centered on Tehran

// Base layers
const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const satellite = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 19,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: '© Google'
});

const topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '© OpenTopoMap'
});

// Layer control
const baseLayers = {
    "OpenStreetMap": osm,
    "Satellite": satellite,
    "Topographic": topo
};
L.control.layers(baseLayers).addTo(map);

// Add a marker with a custom icon
const customIcon = L.ExtraMarkers.icon({
    icon: 'fa-solid fa-map-marker-alt', // Font Awesome icon
    markerColor: 'blue',
    shape: 'circle',
    prefix: 'fa'
});
const marker = L.marker([35.6895, 51.3890], { icon: customIcon }).addTo(map);
marker.bindPopup('<b>Tehran</b>').openPopup();

// Add a circle
const circle = L.circle([35.6995, 51.3890], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map).bindPopup("I am a circle.");

// Add a polyline
const latlngs = [
    [35.6895, 51.3890],
    [35.6995, 51.4090],
    [35.7095, 51.3890]
];
const polyline = L.polyline(latlngs, { color: 'blue' }).addTo(map).bindPopup("I am a polyline.");

// Add geocoder control for searching locations
L.Control.geocoder().addTo(map);
