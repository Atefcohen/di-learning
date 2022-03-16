const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
module.exports = function() {
let today = new Date();
let date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date+' '+time;
}