const fs = require("fs")

fs.readFile('RightLeft.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
    }

    data = [...data]
    console.log(data);

    for (i = 0; i < (data.length + 1); i++) {
        if (data[i] === '>'){
            data[i] = 1;
        } else if (data[i] === '<'){
            data[i] = -1;
        }

    }
        console.log(data);
        let totalSteps = data.reduce((prev, curr) => prev + curr, 0);
        console.log('Total steps: ' + totalStep);
});