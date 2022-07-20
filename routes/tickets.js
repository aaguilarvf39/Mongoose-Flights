const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// This router is mounted to a "starts with" path of '/'

router.get('/new', ticketsCtrl.new);

//router.post('/', ticketsCtrl.create);

router.post('/:id', ticketsCtrl.addToFlight);

module.exports = router;