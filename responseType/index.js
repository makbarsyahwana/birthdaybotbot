const sendAPI = require('../facebookAPI')

sendText = (recipientId, text) => {
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

sendButton = (recipientId, text, message) => {
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