const sendingText = require('../responseType').sendText
const sendingButton = require('../responseType').sendButton
const moment = require('moment')

const birthdayCounting = (messageText) => {
    const birthdayDate = new Date(messageText)
    const birthDate = birthdayDate.getDate()
    const birthMonth = birthdayDate.getMonth()
    const currentBirthDate = new Date(new Date().getFullYear(), birthMonth, birthDate).setHours(23, 59,59)

    const isThisYear = currentBirthDate > Date.now() ? 0 : 1
    const dayTime = 24 * 60 * 60 * 1000;
    const nextBirthday = new Date(new Date().getFullYear() + isThisYear, birthMonth, birthDate)
    const currentDate = new Date()
    const dayToBirthday = Math.round(Math.abs((currentDate.getTime() - nextBirthday.getTime()) / (dayTime)))
    return dayToBirthday !== 365 ? `${dayToBirthday} days until your birthday`: 'Happy Birthday'
}

const messageReceived = (event) => {
    const senderID = event.sender.id;
    const recipientID = event.recipient.id;
    const timeOfMessage = event.timestamp;
    const message = event.message;
    const messageId = message.mid;
    const messageText = message.text;
    const messageAttachments = message.attachments;

    const isDateFormat = moment(messageText, 'MM/DD/YYYY', true).isValid()

    if (messageText) {
        //console.log(moment(messageText.toString(), 'MM/DD/YYYY',true).isValid())
        console.log(typeof messageText)
        console.log(senderID)
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
            }]
            )
        }
        // If we receive a text message, check to see if it matches a keyword
        // and send back the example. Otherwise, just echo the text we received.
        switch (messageText) { 
        case 'hi' :
        case 'halo': {
            return sendingText(senderID, "Hi, please type your first name")
        }

        case 'yeah':
        case 'yes':
        case 'yup': {
            return sendingText(senderID, birthdayCounting(messageText))
        }

        case 'no':
        case 'nah':
        case 'nope': {
            return sendingText(senderID, "Goodbay 👋")
        }
    
        }
    }
}

module.exports = messageReceived