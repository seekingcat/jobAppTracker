const mongoose = require('mongoose')

const meetSchema = new mongoose.Schema({
    jobtitle : {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true,
        min: 0
    },
    joblisting: {
        type: String
    },
    status: {
        type: String,
        enum: ['Applied', 'Interviewed', 'Rejected', 'Offered']
    },
    notes: {
        type: String
    }
})

const Meet = mongoose.model('Meet', meetSchema)

module.exports = Meet