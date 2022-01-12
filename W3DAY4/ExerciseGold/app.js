
//Exercise 1

let language = prompt("what's your language ?").toLowerCase()

switch (language) {
    case "french":
        console.log("Bonjour!")
    break;
    case "english":
        console.log("Hello!")
    break;
    case "hebrew":
        console.log('Shalom!')
    break;
     
    default:
        console.log("01110011 01101111 01110010 01110010 01111001")
    break;
}

//Exercise 2

let grade = prompt("what is your grade?")
if (grade < 70)
console.log("D");
else if (grade <= 80)
console.log("C");
else if (grade <= 90)
console.log("B");
else
console.log("A");

//Exercise 3

let verb = prompt("Give me a string. It must be a verb.")

if (verb.length >= 3 && !verb.endsWith("ing")) {
    verb += "ing";
} else if (verb.length >= 3 && verb.endsWith("ing")) {
    verb += "ly";
}

console.log(verb);

