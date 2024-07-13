const express = require("express");

const routes = express.Router();

const multer = require("multer");

const storage = multer.diskStorage({
    destination : (req, res, cb) => {
        cb(null, "uploads/")
    },
    filename : (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const imageUpload = multer({storage : storage}).single("image");

const crudpracticecontroller = require("../controllers/CrudPracticeController");
const editpracticecontroller = require("../controllers/EditPracticeController")

routes.get("/", crudpracticecontroller.index);
routes.post("/fillData", imageUpload, crudpracticecontroller.addData);
routes.get("/deleteData", crudpracticecontroller.delData)

routes.get("/editData", editpracticecontroller.editData);

routes.post("/filleditData", imageUpload,editpracticecontroller.filleditData);

module.exports = routes