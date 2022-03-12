const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController= require("../controllers/weatherController")
const memeController= require("../controllers/memeController")




router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//cowin APIs
router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/cowin/getDistrict/:districtId", CowinController.getDistricts)
router.get("/cowin/findByDistrict", CowinController.anyName)
router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
//weather APIs
router.get("/cities/weather",weatherController.getCountry)
router.get("/temp/weather",weatherController.getAllCountry)


//memes APIs
router.get("/listOfMemes",memeController.getMemeList)
router.post("/memes/caption_image",memeController.createMeme)



module.exports = router;