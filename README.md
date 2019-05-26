# birthdaybotbot
## Here the code for messanger bot

### Follow this step to running the app in local server

1. download or clone this repo
  `$ git clone https://github.com/makbarsyahwana/birthdaybotbot`

2. Install all nesecary node package
    `$ npm install`

3. runnig the app
    `$ npm start`


### Facebook app configuration

You can implement this code to your own messanger bot
through changing the `config.js` file

messanger bot is all running under `/webhook` api endpoint 

```
module.exports = {
    userDB: YOUR_DATABASE_USERNAME,
    passwordDB: YOUR_DB_PASSWORD,
    pageAccessToken: YOUR_FACEBOOK_PAGE_ACCESS_TOKEN,
    facebookVerifyCode: YOUR_FACEBOOK_APP_VERIFY_CODE
}

```