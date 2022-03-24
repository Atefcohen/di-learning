const express = require('express')
const app = express()

app.use("/", express.static(__dirname + '/public'));


const user = {
    firstname: 'John',
    lastname: 'Doe'
}
//Exercise 1
app.get("/user", (req, res) => { res.json(user) })
//Exercise 2
app.get("/:id", (req, res) => {
    console.log(res.json(req.params));
    res.json(req.params)
})
app.listen(3000, console.log('Server listening on port 3000'))