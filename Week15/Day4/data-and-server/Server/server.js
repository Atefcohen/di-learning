const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();


const app = express();
app.use(cors());


//Sometimes we need it too
app.use(express.urlencoded());
// Because we using POST methods here
app.use(express.json());




app.listen(process.env.PORT||8080, ()=> {

    console.log(`listen to port ${process.env.PORT}`);
})



app.get('/api/hello', (req, res) => {

    res.json("Hello From Express");
})


app.post('/api/world', (req, res) => {

    console.log(req.body)

    res.send(`I recieved your POST request. This is what you send me: ${req.body.post}`);
})
