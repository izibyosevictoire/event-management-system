const express = require('express');
const router = express.Router();
const { EventController } = require('../controllers');


router.post('/',EventController.createEvent );

router.get('/',EventController.getEvent);

router.delete('/:eventId',EventController.deleteEvent );

module.exports = router;