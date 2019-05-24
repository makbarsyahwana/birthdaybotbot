const request = require('request')
const PAGE_ACCESS_TOKEN  = 'EAAJOkLrAuZA4BAL7UCITHbo9MnNqTC9jA0qm9TyvNJBNlKFCudX47RERAF9aweeZBL3juW4l1rBCRmiXPnG3kDbtsQnZAZAL30bgczKGtNbH0OBVDQDMSXRWgr3nSYmp2BZAbmeyw3TLFrKrKuuZBaRDsJw5sAk3EZB70V6FGQICQZDZD'

const sendAPI = (messageData) => {
    request(
        {
          uri: 'https://graph.facebook.com/v2.6/me/messages',
          qs: { access_token: PAGE_ACCESS_TOKEN },
          method: 'POST',
          json: messageData
        },
        (error, response, body) => {
          if (!error && response.statusCode == 200) {
            var recipientId = body.recipient_id
            var messageId = body.message_id
    
            if (messageId) {
              console.log(
                'Successfully sent message with id %s to recipient %s',
                messageId,
                recipientId
              )
            } else {
              console.log(
                'Successfully called Send API for recipient %s',
                recipientId
              )
            }
          } else {
            const {statusCode, statusMessage} = response
            console.log(error) 
            console.error(
              'Failed calling Send API',
              statusCode,
              statusMessage,
              body.error
            )
          }
        }
      )
}

module.exports = sendAPI