const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// The starts with path is '/'

// POST /flights/:id/destinations
router.post('/:id', destinationsCtrl.create);

module.exports = router;