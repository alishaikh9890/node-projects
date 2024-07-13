const practiceTbl = require("../models/practiceTbl");
const fs = require("fs")
const editData = (req, res)=>{
    let id = req.query.id;

    practiceTbl.findById(id).then((single)=>{
        return res.render("edit", {
            single
        })
    })
}

const filleditData = (req, res)=>{
    let editid = req.body.editid;
    let {name, email, password, gender, hobby, city} = req.body;

   if(req.file){
    practiceTbl.findById(editid).then((oldImage)=>{
        fs.unlinkSync(oldImage.image);
        let image = req.file.path;
        practiceTbl.findByIdAndUpdate(editid,{
            name : name,
            email : email,
            password : password,
            gender : gender,
            hobby : hobby,
            city : city,
            image : image
        }).then((success) => {
            console.log("full record updated succesfully.. !");
            return res.redirect("/");
        }).catch((err) => {
            console.log(err);
            return false;
        })

    }).catch((err) => {
        console.log(err);
        return false;
    })
   }
   else {
    practiceTbl.findById(editid).then((records) => {
        practiceTbl.findByIdAndUpdate(editid, {
            name : name,
            email : email,
            password : password,
            gender : gender ,
            hobby : hobby,
            city : city,
            image : records.image
        }).then((success) =>{
            console.log("record updated successfully ...!");
            return res.redirect("/")
        }).catch((err) => {
            console.log(err);
            return false;
        })
    }).catch((err) => {
        console.log(err);
        return false;
    })
   }

}

module.exports = {
    editData,
    filleditData
}