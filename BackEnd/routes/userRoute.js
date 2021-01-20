const express = require('express'); //importing express
var router = express.Router();
const userController = require('../controllers/userController')
require('dotenv').config();
const upload = require('../middlewares/multer');


router.route('/')
.get(userController.getUser)//to get all user
.post(upload.single('U_avatar'),userController.addUser)//to add user



module.exports = router;
