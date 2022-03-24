const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h2>First Line</h2>')
    res.write('<h3>Second Line</h3>')
    res.write('<h4>Third Line</h4>')
    res.end()
}).listen(3000, () => {
    console.log('listening on 3000');
})