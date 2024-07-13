const practiceTbl = require("../models/practiceTbl");
const fs = require("fs")


const index = (req, res) => {
    practiceTbl.find({}).then((data) => {
        return res.render("user", {
          records :  data
        })
   }).catch((err)=>{
        console.log(err);
        return false;
   })
}

const addData = (req, res)=>{
   const {name, email, password, gender, hobby, city} = req.body;
   
    let image = ""
    if(req.file){
         image = req.file.path;
    }
 
    practiceTbl.create({
     name : name,
     email : email,
     password : password,
     gender : gender, 
     hobby : hobby,
     city : city,
     image : image
    }).then((data)=>{
     console.log("Record ADDed Successfully");
     return res.redirect("back")
    }).catch((err)=>{
         console.log(err);
         return false
    })

   
}

const delData = (req, res) =>{
    let id = req.query.id;

    practiceTbl.findById(id).then((data) => {
        fs.unlinkSync(data.image)
    }).catch((err)=>{
        console.log(err);
        return false;
    })

    practiceTbl.findByIdAndDelete(id).then((data)=>{
        console.log("Record Deleted");
        return res.redirect("back")
    }).catch((err)=>{
        console.log(err);
        return false;
    })
}



 module.exports = {
    index,
    addData,
    delData
 }