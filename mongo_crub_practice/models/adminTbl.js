const mongoose = require("mongoose");

const admingSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
         type : String,
         required : true
    },
    password : {
         type : String,
        required : true
    },
    gender : {
         type : String,
         required : true
    },
    course : {
        type : Array,
        required : true
    }
})

const admin = mongoose.model("admin", admingSchema)

module.exports = admin