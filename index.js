const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

const messageReceived = require('./received/messageReceiced')
const postbackReceived = require('./received/postbackReceived')

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())

// setup a route 
app.get('/', function (req, res) {
    res.send("Hello , I'm a birthdayBot")
});

app.listen(process.env.PORT || 3000, function() {
    console.log('server running at : 3000')
});

const FACEBOOK_VERIFY_CODE = 'SMARTBOT';

app.get('/webhook', (req, res) => {
    if (req.query['hub.verify_token'] === FACEBOOK_VERIFY_CODE) {
        res.send(req.query['hub.challenge'])
    }
    res.send('Error : wrong token');
})

app.post('/webhook', (req, res) => {
    const { object, entry } = req.body

    if(object === 'page'){


        entry.map(item => {
            const pageID = item.id
            const eventTime = item.time

            item.messaging.map(event => {
                if (event.message){
                    messageReceived(event)
                } else if(event.postback) {
                    postbackReceived(event)
                }
            })
        })

        res.sendStatus(200)
    }
})

app.get('/test', (req, res) => {
    res.send('test work')
})