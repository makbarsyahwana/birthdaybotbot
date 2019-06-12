const moment = require('moment')

const countBirthday = (messageText) => {
    let birthday = moment(messageText)
    let today = moment().format('MM/DD/YYYY')

    let age = moment(today).diff(birthday, 'years')
    moment(age).format('MM/DD/YYYY')

    let nextBirthday = moment(birthday).add(age, 'years')
    moment(nextBirthday).format('MM/DD/YYYY')

    if (nextBirthday.isSame(today)) {
        return 'Happy Birthday';
      } else {
        nextBirthday = moment(birthday).add(age + 1, 'years');
        return 'Days until next birthday' + ' ' + nextBirthday.diff(today, 'days');
    }
}

module.exports = countBirthday