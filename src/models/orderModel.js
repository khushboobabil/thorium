const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId;
const orderSchema = new mongoose.Schema( {
    userId: {
        type:ObjectId,
        ref:"customerUser"
    }, 
    productId: {
        type:ObjectId,
        ref:"product"
    }, 
    amount:{
        type:Number,
        default:1000
    },
    
    isFreeAppUser:{
       type:Boolean,default:false
    } ,
    todayDate:String,
}, { timestamps: true });


module.exports = mongoose.model('orderDetails', orderSchema) //users

