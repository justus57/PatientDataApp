const express = require('express');
const router = express.Router();
const Model = require('../model');
const Modelrecord = require('../patientRecord');
module.exports = router;

//Post Method
router.post('/patient', async (req, res) => {
    const data = new Model({
        username: req.body.username,
        Email: req.body.Email,
        City: req.body.City,
        Address: req.body.Address,
        PhoneNumber: req.body.PhoneNumber
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
router.post('/record', async (req, res) => {
    const data = new Modelrecord({
        username: req.body.username,
        HeartRate: req.body.HeartRate,
        BloodPressure: req.body.BloodPressure,
        Respiratoryrate: req.body.Respiratoryrate
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/patient', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
//Get by ID Method
router.get('/patient/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.username);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method

router.delete('/patient/:id', async (req, res) => {
    try {
        const id = req.params.username;
        const data = await Model.findByIdAndDelete(username)
        res.send(`Document with ${data.username} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})