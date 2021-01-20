const express = require('express'); //importing express
var router = express.Router();
const scheduleController = require('../controllers/scheduleController')


router.route('/')
.get(scheduleController.getSchedule)
.post(scheduleController.addSchedule)

module.exports = router;
