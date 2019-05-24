const sendingText = require('../responseType').sendText

const postbackReceived = (event) => {
    var senderID = event.sender.id;
    var recipientID = event.recipient.id;
    var timeOfMessage = event.timestamp;
    var payload = event.postback.payload;
    switch(payload)
    {
        case 'yes': {
            let n = ""
            return sendingText(senderID, `there are ${n} days left until your next birthday`)
        }
        
        case 'no': {
            sendingText(senderID, "Goodbay 👋")
        }
        
        default :
            var msg = "Implement logic for this Postback";
            sendingText(senderID,msg); 
        break;
    }

}

module.exports = postbackReceived