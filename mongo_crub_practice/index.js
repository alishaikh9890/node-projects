const express = require("express");

const port = 7000;

const app = express();

const database = require("./config/database");

const adminTbl = require("./models/adminTbl")

app.set("view engine", "ejs");

app.use(express.urlencoded())

app.get("/", (req, res)=>{

    adminTbl.find({}).then((allData) =>{
        return res.render("form", {
            allData
        })
    })
})

app.post("/insertData", (req, res)=>{
    const {name, email, password, gender, course} = req.body;
    adminTbl.create({
        name : name,
        email : email,
        password : password,
        gender : gender,
        course : course
    }).then((data) =>{
        console.log("data inserted successfull ")
        return res.redirect("/")
    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.get("/deleteData", (req, res) => {
    let deleteId = req.query.deleteId;
    adminTbl.findByIdAndDelete(deleteId).then((del)=>{
        console.log("data Deleted Successfully..!");
        return res.redirect("/")
    }).catch((err)=>{
        console.log(err);
        return false;
    })
})

app.get("/editData", (req, res)=>{
    let editId = req.query.editId;
    adminTbl.findById(editId).then((user)=>{
        return res.render("edit", {
            user
        })
    })
})

app.post("/updateData", (req, res)=>{
    let updateId = req.body.updateId;
    const {name, email, password, gender, course} = req.body;
    adminTbl.findByIdAndUpdate(updateId, {
        name : name,
        email : email,
        password : password,
        gender : gender,
        course : course

    }).then((update)=>{
        console.log("Update data successfully")
        return res.redirect("/")
    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.listen(port, (err) => {
    if(err){
        console.log("server is not connected")  
        return false;
    }
    console.log("server is connected")
})