
let obj=require('../logger/logger.js')
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!');
    obj.welcome();
    obj.printMessage();
    console.js(obj.endPoint);
});

module.exports = router;