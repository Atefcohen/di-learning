const http = require('http')

const user = {
    firstname: 'John',
    lastname: 'Doe'
}

http.createServer((req, res) => {
    res.end(JSON.stringify(user))
}).listen(8000)