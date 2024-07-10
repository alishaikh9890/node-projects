const { urlencoded } = require("body-parser");
const express = require("express");

const port = 8000;

const app = express();

let obj = [
    {
        id : 13,
        name : "parth",
        email : "parth@gmail.com",
        password : "parth@123",
        phone : 98985646253
    },
    {
        id : 15,
        name : "jayu",
        email : "jayu@gmail.com",
        password : "jayu@123",
        phone : 5484648767469
    }
]

app.use(urlencoded())

app.set("view engine", "ejs")

app.get("/", (req,res)=>{
   return res.render("form", {
        obj
   })
})

app.post("/insertData", (req, res) => {

    if(req.body.editedid){
        let result = obj.filter((item) => {
            if(item.id == req.body.editedid){
                item.name = req.body.name,
                item.email = req.body.email,
                item.password = req.body.password,
                item.phone = req.body.phone
    
            }
            return item;
        })
        obj = result;
      return  res.redirect("/")
    } else {
       
    obj.push(req.body);
    return res.redirect("/") 
    }

})

app.get("/deleteData", (req,res) =>{
    let data = obj.filter((item)=>{
       return item.id != req.query.id;
    })
    obj = data;
    return res.redirect('/')
})

app.get("/editData", (req, res) =>{
    
    let data = obj.filter((item) => {
        return item.id == req.query.editid;
    })
    return res.render("edit",{
        records : data[0]
    })
})

// app.post("/editedData", (req, res) => {
//     let result = obj.filter((item) => {
//         if(item.id == req.body.editedid){
//             item.name = req.body.name,
//             item.email = req.body.email,
//             item.password = req.body.password,
//             item.phone = req.body.phone

//         }
//         return item;
//     })
//     obj = result;
//     res.redirect("/")
// })

app.listen(port, (err)=>{
    if(err){
        console.log("Server is not connected");
        return false;
    }
    console.log("server is connected on port :-" +port)
})