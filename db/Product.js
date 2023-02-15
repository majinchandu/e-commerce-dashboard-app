const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({ //intiallising the schema of the products table
    name:{
        type:String
    },
    price:{
        type:String,
        
    },
    category:{
        type:String,
        
    },
    userID:{
        type:String,
        
    },
    company:{
        type:String,
        
    }
})

module.exports = mongoose.model("products",productSchema)// matlab products table ke andarr productSchema jasa schema follow hona hahiye