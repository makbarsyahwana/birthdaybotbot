const sendingText = require('../responseType').sendText
const sendingButton = require('../responseType').sendButton
const saveMessages = require('../methods/saveMessage')
const countBirthday = require('../methods/countBirthday')
const moment = require('moment')

const messageReceived = (event) => {
    const senderID = event.sender.id
    const message = event.message
    const messageText = message.text
    
    if (messageText) {
        saveMessages(senderID, messageText)
        const isDateFormat = moment(messageText, 'MM/DD/YYYY', true).isValid()
        let birthDate

        if (messageText.match(/[^-\s]/g) && messageText.length > 4 && !isDateFormat) {
            sendingText(senderID, "please tell your brith day in MM/DD/YYYY format")
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
        }
        
        // If we receive a text message, check to see if it matches a keyword
        // and send back the example. Otherwise, just echo the text we received.
        switch (messageText) { 
        case 'hi' :
        case 'Hi':
        case 'halo': {
            return sendingText(senderID, "Hi, please type your first name")
        }

        case 'yeah':
        case 'yes':
        case 'Yes':
        case 'yup': {
            return sendingText(senderID, countBirthday(birthdate))
        }

        case 'no':
        case 'nah':
        case 'No':
        case 'nope': {
            return sendingText(senderID, "Goodbay 👋")
        }
    
        }
    }
}

module.exports = messageReceived