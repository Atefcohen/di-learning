//  EX 1

// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.

const compareToTen =(num)=> {
    return new Promise((resolve, reject) => {
      if (num<10) {
        resolve(`${num} is smaller than 10, Success!`)
      } else {
        reject(`${num} is bigger than 10, Fail!`)
      }
    })
}
  
let promise = compareToTen(15); 
promise
.then(result => console.log(result))
.catch(error => console.log(error));

promise = compareToTen(8); 
promise
.then(result => console.log(result))
.catch(error => console.log(error));

//  EX 2

//Create a promise that resolves itself in 4 seconds and returns a “success” string.
//How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
//Add code to catch errors and console.log ‘Ooops something went wrong’.

let zOr1 = Math.floor(Math.random() * 2);
let promise2 = new Promise(function (resolve, reject) {
    console.log(zOr1)
    setTimeout(() => {
        if(zOr1>0)
           resolve("success");
           reject("Ooops something went wrong");
    }, 4000);
});

promise2
.then(result => console.log(result))
.catch(error => console.log(error));

//  EX 3

//Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
//Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

Promise.resolve(3).then((value) => console.log(value));
Promise.reject('Boo!').catch((error) => console.log(error));


let promise3 = new Promise((resolve,reject)=>{
    if(zOr1>0)
        resolve(3);
        reject('Boo!')
    
})

promise3
    .then(result=>console.log(result))
    .catch(error=> console.log(error))
