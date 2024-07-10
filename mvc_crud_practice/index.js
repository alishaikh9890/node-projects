const express = require("express");

const app = express();

const port = 8000;

const db = require("./config/database")

app.set("view engine", "ejs")

app.use("/", require("./routes"));

app.listen(port, (err)=>{
    if(err){
        console.log("server is not connected")
        return false;
    }
    console.log("server is connected to: "+port)
})