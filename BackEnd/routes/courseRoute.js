const express = require('express'); //importing express
var router = express.Router();
const courseController = require('../controllers/courseController')
require('dotenv').config();
const upload = require('../middlewares/multer');


router.route('/')
.get(courseController.getCourse)//to get all user
.post(upload.single('C_img'), courseController.addCourse)//to add user



module.exports = router;
