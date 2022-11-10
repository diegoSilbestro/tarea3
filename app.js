const express = require("express")
const app = express()
const logger = require ("morgan")

const indexRouter = require ("./routers/index")
const {conect} = require ("./db/db")

app.use("/api", indexRouter)



conect ();
module.exports = app;