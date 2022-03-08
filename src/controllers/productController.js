const { count } = require("console")
const productModel= require("../models/productModel")

const createProduct= async function (req, res) {
    let infoProduct= req.body
    let productData= await productModel.create(infoProduct)
    console.log(req.newAtribute)
    res.send({msg: productData})
}




module.exports.createProduct=createProduct 
