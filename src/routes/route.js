const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/home", function (req, res) {
    res.send("My home page")
} )

router.get("/login",function (req, res) {
    res.send("you logged successfully")
} )

router.get("/todaysFeed", function (req, res) {
    res.send("todays feed include following")
})



module.exports = router;