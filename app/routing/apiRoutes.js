var reservations = require("../data/reservation.js");

module.exports = function(app) {
    
    app.get("/api/reservation", function(req, res) {
        res.json(reservations);
    });
    
    app.post("/api/reservation", function(req, res) {
        
    });
}