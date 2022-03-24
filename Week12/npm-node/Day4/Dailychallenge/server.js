const express = require('express');
const app = express();


app.listen(5000, () => {

    console.log('listen on port 5000');
})

app.use('/', express.static(__dirname + '/public'));

app.get('/aboutMe/:hobby', (req, res) => {
    let hobby = req.params.hobby;

    if(typeof hobby === "string"){

        res.end(hobby);

    }else{

        res.status(404).send("404 Not found.");
    }
})

app.get('/pic', (req, res) => {

    res.sendFile('/public/pic.html', {root: __dirname});
})


app.get('/form', (req, res) => {

    res.sendFile('/public/form.html', {root: __dirname});
})

app.get('/formData', (req, res) => {

    let email = req.query.email;
    let message = req.query.message;

    res.end( `"${email}" sent you a message: "${message}"` );
})

