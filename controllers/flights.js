const Flight = require('../models/flight')

module.exports = {
    index,
    new: newFlight,
    show
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    });
}

function newFlight(req, res) {
    res.render('flights/new');
  }

function show(req, res) {
    Flight.findById(req.params.id, function(err) {
        res.render('flights/show', { title: 'Flight Detail' });
    });
}