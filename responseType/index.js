const sendAPI = require('../facebookAPI')

const sendText = (recipientId, text) => {
    var messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            text: text
        }
    }

    sendAPI(messageData)
}

const sendButton = (recipientId, text, message) => {
    var messageData = { 
        recipient: {
            id: recipientId
        },
        message: {
            text: text,
            quick_replies: message
        }
    }

    sendAPI(messageData)
}

module.exports = {
    sendText,
    sendButton
}