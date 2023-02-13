const moment = require('moment/moment');
const dateFormat = require('./dateFomat')

const date = new Date()

const test = dateFormat.dateFormat(date)

console.log(date);

console.log(test);

const npmDate = require('moment')

const date2 = new Date()

const date3 = moment().format('YYYY-MM-DD')

console.log(date3);