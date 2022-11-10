const express = require("express")
const indexRouter = express.Router()
const {postController, verMedicin} = require("../controllers/indexController")

indexRouter.post("/crear", postController)
indexRouter.get("/ver", verMedicin)

module.exports = indexRouter
