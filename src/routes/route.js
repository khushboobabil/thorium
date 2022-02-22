const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
});

//1
router.get('/movies', function(req, res) {
    res.send('["Avengers","Iron Man","Thor:Ragnarok","The Incredible Hulk"]')
});
//2
router.get('/movies/:moviesId', function(req, res) {
    let myMovies=["Avengers","Iron Man","Thor:Ragnarok","The Incredible Hulk"];
    let seeMovie=req.params.moviesId;
    if(seeMovie>=myMovies.length-1)
    {
        res.send("Movies doesn't found");
    }
    else{
        res.send(myMovies[seeMovie]);
    }
});
//3
router.get('/films', function(req, res) {
    res.send([{id:1,name:'tenet'},{id:2,name:'Midnight Summer'},{id:3,name:'harry potter'}]);
});  

//4
router.get('/watchContent/:watchContentId', function(req, res) {
    let myFilms=[{id:1,name:'tenet'},{id:2,name:'Midnight Summer'},{id:3,name:'harry potter'}];
    let value=req.params.watchContentId;
    let found=false;
    for(let i=0;i<myFilms.length;i++)
    {
        if(myFilms[i].id==value)
        {
            found=true;
            res.send(myFilms[i]);
            break
        }
    }
});  



module.exports = router;
