const request = require('request')
const PAGE_ACCESS_TOKEN  = 'EAAEFZBKM8zusBAJWvLZAC3rE9VIGR8lGGvvIgCDQrwoGFAUK9dX4A7tMhOwD9uAZAJFRvtwFTVgRpM723BwB3U7RTfKnA6MZAtNdDiWTKP80tT0zAkgT6q665dMrTR5f1PF5wT8ICzGePCu5F90jpq7oJ4ZAP92HazklmR6SYMAZDZD'

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