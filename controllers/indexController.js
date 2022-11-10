const {Medicin} = require ("../models/medicin")

const postController = async (req, res) => {
    try {
        console.log(req.body);
        const item = new Medicin(req.body)
        await item.save()
        res.status(201).json({item})
    } catch (error) {
        res.status(501).json({error})
    }
}

const verMedicin = async(req,res) =>{
    const items = await Medicin.find()
    res.status(200).json({items})
}

module.exports = {postController, verMedicin}