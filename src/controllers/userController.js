const UserModel= require("../models/userModel")



const newBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getAllBooks= async function (req, res) {
    let allBooks= await UserModel.find()
    res.send({msg: allBooks})
}

module.exports.newBook= newBook;
module.exports.getAllBooks= getAllBooks;