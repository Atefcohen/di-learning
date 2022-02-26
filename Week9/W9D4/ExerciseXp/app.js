// EX 1
// Convert the below promise into async await:

// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(result => console.log(result));
// ;

async function getInfo() {
    try{
      let response = await fetch("https://swapi.dev/api/starships/9/");
      let parsedRes =  await response.json()
      console.log(parsedRes) 
    }catch(err){
      console.error(err);
    }
}
getInfo();

// EX 2
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
// Console will show "calling" - after 2000ms it will also say "resolved"

