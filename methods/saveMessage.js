const senderCol = require('../models/sender')
const chatMessagesCol = require('../models/chatMessages')

const saveMessages = (senderID, messageText) => {
    senderCol.findOne({
        messanger_id: senderID
    }).then(foundOne => {
        console.log('sender:', foundOne)
        if (foundOne) {
            chatMessagesCol.create({
                senderId: foundOne._id,
                messanger_id: senderID,
                text: messageText
            }).then(newMessage => {
                console.log(`success save ${newMessage} to database`)
            }).catch(error => {
                console.log('error:', error)
            })
        } else {
            senderCol.create({
                messanger_id: senderID
            }).then(newSender => {
                console.log(`success save ${newSender} to database`)
                if (newSender) {
                    chatMessagesCol.create({
                        senderId: newSender._id,
                        messanger_id: senderID,
                        text: messageText
                    }).then(newMessage => {
                        console.log(`success save ${newMessage} to database`)
                    }).catch(error => {
                        console.log('error:', error)
                    })
                }
            }).catch(error => {
                console.log('error:', error)
            })
        }
    }).catch(error => {
        console.log('error:', error)
    })
}

module.exports = saveMessages