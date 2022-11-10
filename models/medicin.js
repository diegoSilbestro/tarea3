const mongoose = require("mongoose")

const Schema = mongoose.Schema
const medicinSchema = new Schema({
    marca: {
        type: String,
        required: true
    },
    laboratorio: {
        type: String,
        required: true
    },
    cantidadDroga: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    ventaLibre: {
        type: Boolean,
        required: true
    },
    unidadesPorPaquete: {
        type:Number,
    }
})

const Medicin = mongoose.model("Medicin", medicinSchema)
module.exports = {Medicin}