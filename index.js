const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()        

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())

// setup a route 
app.get('/', function (req, res) {
    res.send("Hello , I'm a birthdayBot")
});

app.listen(3000, function() {
    console.log('server running at : 3000')
});

const FACEBOOK_VERIFY_CODE = 'SMARTBOT';

app.get('/webhook', function (req, res) {
    if (req.query['hub.verify_token'] === FACEBOOK_VERIFY_CODE) {
        res.send(req.query['hub.challenge'])
    }
    res.send('Error : wrong token');
})