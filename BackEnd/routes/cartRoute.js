
const express = require("express");
const {
  addCourseInCart,
  getCourseInCart,
  cartItems
} = require("../controllers/cartController");
const router = express.Router();
const{requireSignin}=require('../middlewares/usermiddleware')

router.post("/",addCourseInCart);
router.get("/", getCourseInCart);
router.get("/cartItems", cartItems);


module.exports = router;