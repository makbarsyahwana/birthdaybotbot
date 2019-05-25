const mongoose = require('mongoose')

const ChatMessages = new mongoose.Schema({
    sender_id: Number,
    text: String,
    created_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('ChatMessages', ChatMessages)