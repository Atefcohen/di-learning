//Exercise 1

let people = ["Greg", "Mary", "Devon", "James"];

people.splice(0,1);
people.splice(2, 1, "Jason");
people.push("Ethan")
console.log(people.indexOf("Mary"));
let peopleCopy = people.slice(1, people.length - 1);
console.log(people.indexOf("Foo"));
let last = peopleCopy[people.length - 1]

console.log(people);
console.log(peopleCopy);

//Part 2

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] == "Jason") {
        break;
    }
}

//Exercise 2

let colors = ["white", "black", "red", "green", "blue"];
let suffix = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i+1} choice is ${colors[i]}`);
}

for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i+1}${suffix[i]} choice is ${colors[i]}`);
}

//Exercise 3

let userNum = parseInt(prompt("Enter a number"));
console.log(userNum);

while (userNum < 10) {
    userNum = parseInt(prompt("Enter a number"));
    console.log(userNum);
}

//Exercise 4

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
};

console.log(building.numberOfFloors);
console.log(building["numberOfAptByFloor"]["firstFloor"], building.numberOfAptByFloor["thirdFloor"]);
console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent[building.nameOfTenants[1].toLowerCase()][0]);

if (building.numberOfRoomsAndRent["sarah"][1] + building.numberOfRoomsAndRent["david"][1] > building.numberOfRoomsAndRent["dan"][1]) {
    building.numberOfRoomsAndRent["dan"][1] = 1200;
    console.log(building.numberOfRoomsAndRent["dan"][1]);
}

//Exercise 5

let family = {father: "Homer", mother: "Marge", son: "Bart", daughter: "Lisa", baby: "Maggie"};

for (let key in family) {
    console.log(key);
    console.log(family[key])
}


//Exercise 6

let details = { my: 'name', is: 'Rudolf', the: 'raindeer'};
let sentence = "";
for (let key in details) {
    sentence += `${key} ${details[key]} `;
}
console.log(sentence);

//Exercise 7

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
let societyName = "";

for (let i = 0; i < names.length; i++) {
    societyName += names[i][0];
}

console.log(societyName)