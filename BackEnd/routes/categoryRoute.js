// const shortid = require("shortid");
// const path = require("path");                          commented because it not used 
// require('dotenv').config();
// const upload = require('../middlewares/multer');

const express = require("express");
const {
  addCategory,
  getCategories,
  updateCategories,
  deleteCategories,
} = require("../controllers/category");
const router = express.Router();
const{requireSignin}=require('../middlewares/usermiddleware')

router.post("/create",addCategory);
router.get("/getcategory", getCategories);
router.put("/update" ,updateCategories);
router.delete("/delete", deleteCategories);

module.exports = router;