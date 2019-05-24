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

app.listen(8071, function() {
    console.log('server running at : 8071')
});