var moment = require('moment');

// var date = new Date();
// var months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July',
//               'August', 'Sept', 'Oct', 'Nov', 'Dec'];

// console.log(months[date.getMonth()]);
var createdAt = 1234;
var date = moment(createdAt);
// date.add(100, 'year').subtract(9, 'months');
// console.log(`Moment  =Object : ${date}`);
// console.log(`Sort of Date : ${date.format('MMM Do, YYYY')}`);
console.log(date.format('h:mm a'));

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);
