const express = require("express");

const routes = express.Router();

const crudpracticecontroller = require("../controllers/CrudPracticeController")

routes.get("/", crudpracticecontroller.index)

module.exports = routes