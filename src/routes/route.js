const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")

const tokenCheck1=require("../middlewares/commonMiddlewares")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)


router.get("/users/:userId",tokenCheck1.tokenCheck,tokenCheck1.authorise, userController.getUserData)
router.post("/users/:userId/posts", tokenCheck1.tokenCheck,tokenCheck1.authorise,userController.postNewMessage)

router.put("/users/:userId", tokenCheck1.tokenCheck,tokenCheck1.authorise,userController.updateUser)
router.delete('/users/:userId',tokenCheck1.tokenCheck,tokenCheck1.authorise ,userController.deleteUser)

module.exports = router;

