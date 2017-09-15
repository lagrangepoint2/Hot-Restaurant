var reservations = require("../data/reservation.js");

module.exports = function(app) {
    
    app.get("/api/reservation", function(req, res) {
        res.json(reservations);
    });
    
    app.delete("/api/deletereservation/:id", function(req, res) {
       console.log(req.params.id); 
        reservations.forEach(function(content, index) {
            if(content.reservationID === req.params.id) {
                reservations.splice(index, 1);
            }
        })
        
        res.send(reservations);
    });
    
    app.post("/api/reservation", function(req, res) {
        var newReservation = req.body;
        
        reservations.push(newReservation);
        
        res.json(newReservation);
    });
}