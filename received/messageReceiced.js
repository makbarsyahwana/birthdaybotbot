const sendingText = require('../responseType').sendText
const sendingButton = require('../responseType').sendButton

messageReceived = (event) => {
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
            let message = "Hi, please type your first name";         
            sendingText(senderID,msg); 
            break;
        case messageText.match(/[^-\s]/g) && messageText.length > 4 :
            let message = "please tell your brith day in MM/DD/YYYY format"
            sendingText(senderID, msg)
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
            let message = `there are ${n} days left until your next birthday`
            sendingText(senderID, message)


        case 'no':
        case 'nah':
        case 'nope':
            let message = "Goodbay 👋"
            sendingText(senderID, message)
            
    
        default :
            sendingText(senderID,"Hi");
        break;
        }
    }
}

module.exports = messageReceived