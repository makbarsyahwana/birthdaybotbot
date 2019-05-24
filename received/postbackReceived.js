const sendingText = require('../responseType').sendText

postbackReceived = (event) => {
    var senderID = event.sender.id;
    var recipientID = event.recipient.id;
    var timeOfMessage = event.timestamp;
    var payload = event.postback.payload;
    switch(payload)
    {
        case 'yes':
            let n = ""
            let message = `there are ${n} days left until your next birthday`
            sendingText(senderID, message)
        
        case 'no':
            let message = "Goodbay 👋"
            sendingText(senderID, message)
        
        default :
            var msg = "Implement logic for this Postback";
            //sendTextMessage(senderID,msg); 
        break;
    }

}

module.exports = postbackReceived