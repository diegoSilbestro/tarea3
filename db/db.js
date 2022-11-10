const mongoose = require ("mongoose")
require("dotenv").config()

const conect = async () =>{
    try {
        await mongoose.connect(process.env.CONECTMONGO)
        console.log("base de datos conectada");
    } catch {
        console.log("No se pudo conectar con la base de datos");
    }
}

module.exports = {conect};

