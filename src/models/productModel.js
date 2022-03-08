const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    name: String, 
    catogary : String, 

    prices: {
        type:Number,
        required:true
    },
    
}, { timestamps: true });


module.exports = mongoose.model('product', productSchema) //users
