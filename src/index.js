const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://khushboobabil12:khushboo12345@cluster0.j9hng.mongodb.net/middleware", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

//let globalMiddleware = function(req, res, next){
   /* if(!req.headers.isFreeAppUser==true)
    {
        res.send("request is missing a mandatory header")
    }
    else{
        next()
    }
    console.log('Before adding custom header '+JSON.stringify(req.headers))
    let contentTypeHeader = req.headers["content-type"]
//     //let name = "functionup"
//     //req.headers.organisation = name
// */

   
//     //console.log('content-type header is '+contentTypeHeader)
//     console.log('After adding custom header '+JSON.stringify(req.headers))
//     console.log('Before adding custom response header '+JSON.stringify(res.getHeaders()))
//     res.setHeader('batch','thorium')
//     console.log('After adding custom response header '+JSON.stringify(res.getHeaders()))
//     req.newAtribute = 'India'
//     next()
// }

// app.use(globalMiddleware)
app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
