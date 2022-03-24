const express = require('express')
const app = express()

app.get('/', (req, res) => { res.send('<h1>serverExpress.js</h1>') });
app.listen(8000)   