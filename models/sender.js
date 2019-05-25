const mongoose = require('mongoose')

const Sender = new mongoose.Schema({
    sender_id: Number,
    created_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Sender', Sender)