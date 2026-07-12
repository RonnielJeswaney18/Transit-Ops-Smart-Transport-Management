// Local Storage Database

const DB = {

    getVehicles() {
        return JSON.parse(localStorage.getItem("vehicles")) || [];
    },

    saveVehicles(data) {
        localStorage.setItem("vehicles", JSON.stringify(data));
    },

    getDrivers() {
        return JSON.parse(localStorage.getItem("drivers")) || [];
    },

    saveDrivers(data) {
        localStorage.setItem("drivers", JSON.stringify(data));
    },

    getTrips() {
        return JSON.parse(localStorage.getItem("trips")) || [];
    },

    saveTrips(data) {
        localStorage.setItem("trips", JSON.stringify(data));
    },

    getMaintenance() {
        return JSON.parse(localStorage.getItem("maintenance")) || [];
    },

    saveMaintenance(data) {
        localStorage.setItem("maintenance", JSON.stringify(data));
    },

    getExpenses() {
        return JSON.parse(localStorage.getItem("expenses")) || [];
    },

    saveExpenses(data) {
        localStorage.setItem("expenses", JSON.stringify(data));
    }

};