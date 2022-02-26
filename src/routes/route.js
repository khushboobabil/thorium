const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const userController= require("../controllers/userController")


router.post("/newBook", userController.newBook  )

router.get("/getAllBooksList", userController.getAllBooks)

module.exports = router;