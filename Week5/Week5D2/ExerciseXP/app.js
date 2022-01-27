//Exercise 1//
//Using a DOM property, retrieve the h1 and console.log it.//
let h1_someFacts = document.querySelector("h1").firstChild;
console.log(h1_someFacts.textContent);
//Using DOM methods, remove the last paragraph in the <article> tag.
articleLastParagraph = document.querySelector("article :last-child");
document.querySelector("article").removeChild(articleLastParagraph);
//Add a event listener which will change the background color of the h2 to red, when it’s clicked on.//
document.getElementsByTagName("h2")[0].addEventListener("click",function() {
    document.getElementsByTagName("h2")[0].setAttribute("style", "background-color: red;");
});
//Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).//
document.getElementsByTagName("h3")[0].addEventListener("click",function() {
    document.getElementsByTagName("h3")[0].setAttribute("style", "display: none;");
});
//Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.//
buttonBold = document.createElement("button");
buttonBold.textContent = "Bold"
buttonBold.addEventListener("click", allParagraphsToBold);
document.body.appendChild(buttonBold);

function allParagraphsToBold(){
    for (p of document.querySelectorAll('p')){
        p.setAttribute("style", "font-weight: bold;")
    }
}
//BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)//
document.getElementsByTagName("h1")[0].addEventListener("mouseover",function() {
    document.getElementsByTagName("h1")[0]
    .setAttribute("style", `font-size: ${Math.floor(Math.random() * 101)}px;`);
});
//BONUS : When you hover on the 2nd paragraph, it should fade out.//
document.querySelectorAll('p')[1].addEventListener("mouseover",function() {
    document.getElementsByTagName("p")[1]
    .setAttribute("style", "opacity: 0.2;");
});

document.querySelectorAll('p')[1].addEventListener("mouseout",function() {
    document.getElementsByTagName("p")[1]
    .setAttribute("style", "opacity: 1;");
});

// Exercise 2
let form = document.forms[0];
console.log(form);

console.log(document.getElementById("fname"));
console.log(document.getElementById("lname"));

console.log(form.elements.fname);
console.log(form.elements.lname);


form.addEventListener("submit", makeList);

function makeList(event) {
    firstName = form.elements.fname.value;
    lastName = form.elements.lname.value;
    if (firstName != "" && lastName != "") {
        ul = document.getElementsByClassName("usersAnswer")[0];
        fNameItem = document.createElement("li");
        fNameItem.innerText = firstName;
        lNameItem = document.createElement("li");
        lNameItem.innerText = lastName;
        ul.appendChild(fNameItem);
        ul.appendChild(lNameItem);
    }
    event.preventDefault();
}

// Exercise 3

let allBoldItems=[];
getBold_items();

function getBold_items(){
    allBoldItems = document.querySelectorAll("strong");
}

function highlight(){
    for (item of allBoldItems){
        item.setAttribute("style", "color: blue;");
    }
}

function return_normal(){
    for (item of allBoldItems){
        item.setAttribute("style", "color: black;");
    }
}
document.getElementsByTagName("p")[0].addEventListener("mouseover",highlight);
document.getElementsByTagName("p")[0].addEventListener("mouseout",return_normal);

//Exercise 4
let form = document.forms[0];
form.addEventListener("submit", calculateVolume);


function calculateVolume(event){
    let rad = form.radius.value;
    let volume = 4/3*Math.PI*Math.pow(rad,3);
    console.log(`Radius = ${rad}, Volume = ${volume} `);
    form.volume.value = volume;
    event.preventDefault();

}
