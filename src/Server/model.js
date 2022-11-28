const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    Email: {
        required: true,
        type: String
    },
    City: {
        required: true,
        type: String
    },
    Address: {
        required: true,
        type: String
    },
    PhoneNumber: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('patient', dataSchema)