const b = 5;
const a = require('./main.js');
const c = a + b;
// In a script.js file create a server with http and console.log a message.
// Set the response header, and respond by the result from Part I.
// Also write in a head tag a message like ‘Hi there at the frontend’
// Your server should run on http://localhost:3000/
let http = require("http");
const server = http.createServer((req, res)=> {
    console.log('Waiting for request..');
    res.end(`Hi there at the frontend! My module is: ${c}`);
});
server.listen(3000, ()=>{
    console.log('listening to port 3000');
});

//part 3

const dateTime = require('./main2')

let http2 = require("http");
const serverB = http2.createServer((req, res)=> {
    console.log('Waiting for request..');
    res.end(`The current Time and Date are: ${dateTime}`);
});
serverB.listen(8080, ()=>{
    console.log('listening to port 8080');
});