const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const ProductController= require("../controllers/productController")
const OrderController= require("../controllers/orderController")
//const mid1= require("../controllers/middleware")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

let headCheck = function(req,res,next){
    let isFreeAppUser = req.headers["isfreeappuser"]
     
    if(isFreeAppUser != undefined){
      console.log("control goes to middleware")
    
        next();
    
}else{
    res.status(426).send("IMPORTANT HEADER FILE IS  MISSING")
}
}

router.post("/createProduct", ProductController.createProduct  )

router.post("/createUser",headCheck, UserController.createUser  )  

router.post("/createOrder",headCheck,OrderController.createOrder )


//router.post("/createBook", BookController.createBook  )
//router.get("/getUsersData", UserController.getUsersData)

//router.post("/createBook", BookController.createBook  )

//router.get("/getBooksData", BookController.getBooksData)

//router.post("/updateBooks", BookController.updateBooks)
//router.post("/deleteBooks", BookController.deleteBooks)


module.exports = router;