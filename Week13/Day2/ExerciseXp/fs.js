//Exercise 1
const fs = require("fs")
//Create file text.txt
fs.readFile('text.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data);
});

let newText = "hi Its me again! Atef"
fs.appendFile('./text.txt',newText, (err) =>{
    if(err){
        console.error(err)
        return
    }
});
fs.unlink('menu.txt', function (err) {
    console.log('file deleted');
});   

