const sendingText = require('../responseType').sendText
const sendingButton = require('../responseType').sendButton
const saveMessages = require('../methods/saveMessage')
const countBirthday = require('../methods/countBirthday')
const moment = require('moment')

const messageReceived = (event, testMessage, callback) => {
    let senderID, message, messageText = testMessage

    if (event !== null){
        senderID = event.sender.id
        message = event.message
        messageText = message.text
    }
    
    if (messageText) {
        saveMessages(senderID, messageText)
        const isDateFormat = moment(messageText, 'MM/DD/YYYY', true).isValid()
        let birthDate

        if (messageText.match(/[^-\s]/g) && messageText.length > 4 && !isDateFormat) {
            sendingText(senderID, "please tell your brith day in MM/DD/YYYY format")
            callback("please tell your brith day in MM/DD/YYYY format")
        }

        if (isDateFormat) {
            sendingButton(senderID, "do you wants to know how many days till his next birtday?", [{
                content_type: 'text',
                title: 'yes',
                payload: 'yes'
            },{
                content_type: 'text',
                title: 'no',
                payload: 'no'
            }])
            birthdate = messageText
            callback("Sending Button")
        }
        
        // If we receive a text message, check to see if it matches a keyword
        // and send back the example. Otherwise, just echo the text we received.
        switch (messageText) { 
        case 'hi' :
        case 'Hi':
        case 'halo': {
            callback("Hi, please type your first name")
            return sendingText(senderID, "Hi, please type your first name")

        }

        case 'yeah':
        case 'yes':
        case 'Yes':
        case 'yup': {
            callback(countBirthday(birthdate))
            return sendingText(senderID, countBirthday(birthdate))
        }

        case 'no':
        case 'nah':
        case 'No':
        case 'nope': {
            callback("Goodbay 👋")
            return sendingText(senderID, "Goodbay 👋")
        }
    
        }
    }
}

module.exports = messageReceived