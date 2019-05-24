const sendingText = require('../responseType').sendText
const sendingButton = require('../responseType').sendButton

const messageReceived = (event) => {
    const senderID = event.sender.id;
    const recipientID = event.recipient.id;
    const timeOfMessage = event.timestamp;
    const message = event.message;
    
    const messageId = message.mid;
    
    const messageText = message.text;
    const messageAttachments = message.attachments;
    if (messageText) {
    
        // If we receive a text message, check to see if it matches a keyword
        // and send back the example. Otherwise, just echo the text we received.
        switch (messageText) { 
        case 'hi' :
        case 'halo':       
            sendingText(senderID, "Hi, please type your first name")

        case messageText.match(/[^-\s]/g) && messageText.length > 4 :
            sendingText(senderID, "please tell your brith day in MM/DD/YYYY format")

        case moment(messageText, 'MM/DD/YYYY',true).isValid() :
            sendingButton(senderID, [{
                    type: 'text',
                    title: 'Yes',
                    payload: 'yes'
                },{
                    type: 'text',
                    title: 'No',
                    payload: 'no'
                }
            ])

        case 'yeah':
        case 'yes':
        case 'yup':
            let n = ""
            sendingText(senderID, `there are ${n} days left until your next birthday`)
        break;

        case 'no':
        case 'nah':
        case 'nope':
            sendingText(senderID, "Goodbay 👋")
        break;
    
        default :
            sendingText(senderID,"Hi");
        break;
        }
    }
}

module.exports = messageReceived