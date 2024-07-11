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

routes.get("/", crudpracticecontroller.index);
routes.post("/fillData", imageUpload, crudpracticecontroller.addData);
routes.get("/deleteData", crudpracticecontroller.delData)


module.exports = routes