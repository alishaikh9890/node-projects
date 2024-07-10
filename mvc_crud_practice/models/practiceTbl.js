const mongoose = require("mongoose");

const practiceSchema = mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    },
    gender :{
        type : String,
        required : true
    },
    hobby :{
        type : Array,
        required : true
    },
    city :{
        type : String,
        required : true
    },
    image :{
        type : String,
        required : true
    },
})

const crud = mongoose.model("practiceCrud", crudSchema);

module.exports = crud;

