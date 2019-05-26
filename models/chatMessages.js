const mongoose = require('mongoose')

const ChatMessages = new mongoose.Schema({
    senderId: [{ type: Schema.Types.ObjectId, ref: 'Sender' }],
    messanger_id: Number,
    text: String,
    created_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('ChatMessages', ChatMessages)