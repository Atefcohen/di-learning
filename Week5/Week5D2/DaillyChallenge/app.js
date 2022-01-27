// Exercise 1

// Tell the story
    
//     In todays exercise we will be creating a Mad Libs game.
//     If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.
//     In this exercise you will complete the functionality with event listeners.
//     Follow these steps: 
//         1. Get the value of each of the inputs in the HTML file when the button is clicked.
//         2. Make sure the values are not empty
//         3. Write a story that uses each of the values.
//         4. Make sure you check the console for errors when playing the game.
//         5. Bonus: Add a "shuffle" button to the HTML file,
//             when clicked the button should change the story currently displayed (but keep the values entered by the user).
//             The user could click the button at least three times and get a new story.
//             Display the stories randomly.

let button = document.querySelector("button");
console.log(button);
let noun = document.getElementById("noun");
let adjective = document.getElementById("adjective");
let person = document.getElementById("person");
let verb = document.getElementById("verb");
let place = document.getElementById("place");

let inputs = [noun, adjective, person, verb, place];
for (const item of inputs) {
    item.required = true;
}

let story = document.getElementById("story");
console.log(story);
button.addEventListener("click", () => {
    story.textContent = `The ${adjective.value} ${noun.value} ${verb.value} ${person.value} in the ${place.value}`;
});