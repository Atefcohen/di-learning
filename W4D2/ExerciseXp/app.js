//Exercise 1
//Part 1
function infoAboutMe() {
    console.log("My age is 23")
    
}
infoAboutMe()

//Part 2
function infoAboutPerson(personName,personAge,personFavoriteColor) {
    console.log(`your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`)
}

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

//Exercise 2

function calculateTip() {
    let userBill = parseInt(prompt("Enter the amount of the bill."));
    let tip;

    if (userBill < 50){
        tip = 0.2;
    } else if (50 <= userBill && userBill < 200) {
        tip = 0.15;
    } else if (200 <= userBill) {
        tip = 0.1;
    }

    console.log(`Bill is ${userBill}, tip is ${tip}, the calculated bill is ${tip * userBill + userBill}`);
}

calculateTip();

//Exercise 3

function isDivisible(divisor){
    
    let outcome = [];
    let j = 0;
    let sum = 0;

    for (let i = 0; i < 500; i++) {
        if (i % divisor == 0) {
            outcome[j] = i;
            sum += i;
            j++;
        }
    }
    console.log(outcome)
    console.log(sum);
}

isDivisible(23);

//Exercise 4

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

let shoppingList = ["banana", "orange", "apple"];

function myBill(){

    let sum = 0;
    for (const item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            sum += prices[item];
            stock[item]--;            
        }
    }
    
    console.log(sum);
    console.log(stock);
}

myBill();

//Exercise 5

function changeEnough(itemPrice, amountOfChange){
    
    let currency = [0.25, 0.1, 0.05, 0.01];
    let sumOfChange = 0;

    for (const i in amountOfChange) {
        sumOfChange += amountOfChange[i] * currency[i];
    }

    if (sumOfChange > itemPrice) {
        return true;
    } else {
        return false;
    }
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2,100,0,0]));
console.log(changeEnough(0.75, [0,0,20,5]));

//Exercise 6
function hotelCost(){
    
    let nightCost = 140;
    let numOfNights;

    while (true) {
        numOfNights = parseInt(prompt("How many nights would you like to stay?"));
        if (!isNaN(numOfNights)) {
            break;
        }
    }
    return numOfNights * nightCost;
}


function planeRideCost(){
    
    let destinationCost = {london: 183, paris: 220, other: 300};
    let destination;

    while (true) {
        destination = prompt("What is your destination?").toLocaleLowerCase();
        if (!/[^a-z]/.test(destination)) {
            break;
        }
    }

    if (!(destination in destinationCost)) {
        destination = "other";
    }
    
    return destinationCost[destination];
}


function rentalCarCost(){

    let dayCost = 40;
    let numOfDays;

    while (true) {
        numOfDays = parseInt(prompt("How many days would you like to rent?"));
        if (!isNaN(numOfDays)) {
            break;
        }
    }

    if (numOfDays <= 10) {
        return dayCost * numOfDays;
    } else {
        return dayCost * numOfDays * 0.95;
    }
}


function totalVacationCost() {

    let hotel = hotelCost();
    let plane = planeRideCost();
    let car = rentalCarCost()
    let totalCost = hotel + plane + car;
    console.log(`Hotel cost: ${hotel}$, destination cost: ${plane}$ and car rental cost: ${car}$`);
    console.log(`Total cost: ${totalCost}$`);
}


    




