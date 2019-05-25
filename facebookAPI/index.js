const request = require('request')
const PAGE_ACCESS_TOKEN  = 'EAAEFZBKM8zusBACLT4RIiAbajkmlz5Xnhlu6oRl6pLtG8wn9y3Ku2dXfbYhPe5gBE3lHB6cgmDZAgjACarZCZAWNpe7NqTGtIe31d0ibv9wt5hxEsPIzZC7ZByfRnOwLz56kPMLhWeqzm08xR6VWQmGmZBaRK1DBNra1Mek7zqKUQZDZD'

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