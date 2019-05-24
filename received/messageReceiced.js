const sendingText = require('../responseType').sendText
const sendingButton = require('../responseType').sendButton
const moment = require('moment')

const messageReceived = (event) => {
    const senderID = event.sender.id;
    const recipientID = event.recipient.id;
    const timeOfMessage = event.timestamp;
    const message = event.message;
    
    const messageId = message.mid;
    
    const messageText = message.text;
    const messageAttachments = message.attachments;
    if (messageText) {
        console.log(moment(messageText.toString(), 'MM/DD/YYYY',true).isValid())
        console.log(typeof messageText)
        // If we receive a text message, check to see if it matches a keyword
        // and send back the example. Otherwise, just echo the text we received.
        switch (messageText) { 
        case 'hi' :
        case 'halo': {
            return sendingText(senderID, "Hi, please type your first name")
        }

        case messageText.match(/[^-\s]/g) && messageText.length > 4 : {
            return sendingText(senderID, "please tell your brith day in MM/DD/YYYY format")
        }

        case moment(messageText.toString(), 'MM/DD/YYYY',true).isValid() : {
            return sendingButton(senderID, "do you wants to know how many days till his next birtday?", [{
                            type: 'text',
                            title: 'Yes',
                            payload: 'yes'
                        },{
                            type: 'text',
                            title: 'No',
                            payload: 'no'
                        }
                    ])
        }

        case 'yeah':
        case 'yes':
        case 'yup': {
            let n = ""
            return sendingText(senderID, `there are ${n} days left until your next birthday`)
        }

        case 'no':
        case 'nah':
        case 'nope': {
            return sendingText(senderID, "Goodbay 👋")
        }
    
        default :
            sendingText(senderID,"Hi");
        break;
        }
    }
}

module.exports = messageReceived