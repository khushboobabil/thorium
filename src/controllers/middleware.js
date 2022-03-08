const { count } = require("console")


let headCheck = function(req,res,next){
    let isFreeAppUser = req.headers["isfreeappuser"]
     
    if(isFreeAppUser != undefined){
      console.log("control goes to middleware")
    
        next();
    
}else{
    res.status(426).send("IMPORTANT HEADER FILE IS  MISSING")
}
}

module.exports.headCheck=headCheck