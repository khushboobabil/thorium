const jwt = require("jsonwebtoken");


    const tokenCheck=function(req,res,next){
        try{
            let token = req.headers["x-auth-token"];
            if(!token) return res.send({ status:false, msg:"token must be present"})
            let decodedToken = jwt.verify(token, "functionup-thorium")
            if(!decodedToken) return res.send({ status: false, msg: "token is invalid"})
            next()
        }
        catch (error){
            res.status(401).send(error.message)                
         }

        
        }


        

        const authorise = function(req, res, next) {
            try{
            let token = req.headers["x-auth-token"];
            let decodedToken = jwt.verify(token, 'functionup-thorium')
            let userToBeModified = req.params.userId
            let userLoggedIn = decodedToken.userId
            if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

            // comapre the logged in user's id and the id in request
            next()
            }
            catch (error){
                res.status(403).send(error.message)                
             }
        }

    module.exports.tokenCheck =tokenCheck

    module.exports.authorise =authorise