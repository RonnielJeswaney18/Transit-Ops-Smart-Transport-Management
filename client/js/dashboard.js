// Get data from Local Storage

const vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
const drivers = JSON.parse(localStorage.getItem("drivers")) || [];
const trips = JSON.parse(localStorage.getItem("trips")) || [];
const maintenance = JSON.parse(localStorage.getItem("maintenance")) || [];
const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

console.log("Vehicles:", vehicles.length);
console.log("Drivers:", drivers.length);
console.log("Trips:", trips.length);