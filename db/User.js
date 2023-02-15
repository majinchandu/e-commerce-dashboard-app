const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({ //intiallising the schema of the users table
    name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("users",userSchema)// matlab users table ke andarr userSchema jasa schema follow hona hahiye