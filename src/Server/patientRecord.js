const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    BloodPressure: {
        required: true,
        type: String
    },
    HeartRate: {
        required: true,
        type: String
    },
    Respiratoryrate: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('record', dataSchema)