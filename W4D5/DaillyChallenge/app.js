// Exercise 1:

// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.
// 1. Create an array which value is the planets of the solar system.
// 2. For each planet in the array, create a <div> using createElement. This div should have a class named "planet ".
// 3. Each planet should have a different background color. (Hint: add a new class to each planet).
// 4. Finally append each div to the <section> in the HTML (presented below).
// 5. Bonus: Do the same process to create the moons.
//     - Be careful, each planet has a certain amount of moons. How should you display them?
//     - Should you still use an array for the planets ? Or an array of objects?

let planetsAndMoons = { 
    "Mercury": [],

    "Venus": [],

    "Earth": ["Moon"],

    "Mars": ["Deimos", "Phobos"],

    "Jupiter": [
      "Metis",
      "Adrastea",
      "Amalthea",
      "Thebe",
      "Io",
      "Europa",
      "Ganymede",
      "Callisto",
      "Themisto",
      "Leda",
      "Himalia",
      "Lysithea",
      "Elara",
      "S/2000 J11",
      "S/2003 J12",
      "Carpo",
      "Euporie",
      "S/2003 J3",
      "S/2003 J18",
      "Orthosie",
      "Euanthe",
      "Harpalyke",
      "Praxidike",
      "Thyone",
      "S/2003 J16",
      "Iocaste",
      "Mneme",
      "Hermippe",
      "Thelxinoe",
      "Helike",
      "Ananke",
      "S/2003 J15",
      "Eurydome",
      "Arche",
      "Herse",
      "Pasithee",
      "S/2003 J10",
      "Chaldene",
      "Isonoe",
      "Erinome",
      "Kale",
      "Aitne",
      "Taygete",
      "S/2003 J9",
      "Carme",
      "Sponde",
      "Megaclite",
      "S/2003 J5",
      "S/2003 J19",
      "S/2003 J23",
      "Kalyke",
      "Kore",
      "Pasiphae",
      "Eukelade",
      "S/2003 J4",
      "Sinope",
      "Hegemone",
      "Aoede",
      "Kallichore",
      "Autonoe",
      "Callirrhoe",
      "Cyllene",
      "S/2003 J2"
    ],

    "Saturn": [
      "Tarqeq",
      "Pan",
      "Daphnis",
      "Atlas",
      "Prometheus",
      "Pandora",
      "Epimetheus",
      "Janus",
      "Aegaeon",
      "Mimas",
      "Methone",
      "Anthe",
      "Pallene",
      "Enceladus",
      "Tethys",
      "Calypso",
      "Telesto",
      "Polydeuces",
      "Dione",
      "Helene",
      "Rhea",
      "Titan",
      "Hyperion",
      "Iapetus",
      "Kiviuq",
      "Ijiraq",
      "Phoebe",
      "Paaliaq",
      "Skathi",
      "Albiorix",
      "S/2007 S2",
      "Bebhionn",
      "Erriapo",
      "Siarnaq",
      "Skoll",
      "Tarvos",
      "Greip",
      "S/2004 S13",
      "Hyrrokkin",
      "Mundilfari",
      "S/2006 S1",
      "Jarnsaxa",
      "Narvi",
      "Bergelmir",
      "S/2004 S17",
      "Suttungr",
      "Hati",
      "S/2004 S12",
      "Bestla",
      "Farbauti",
      "Thrymr",
      "S/2007 S3",
      "Aegir",
      "S/2004 S7",
      "S/2006 S3",
      "Kari",
      "Fenrir",
      "Surtur",
      "Ymir",
      "Loge",
      "Fornjot"
    ],

    "Uranus": [
      "Cordelia",
      "Ophelia",
      "Bianca",
      "Cressida",
      "Desdemona",
      "Juliet",
      "Portia",
      "Rosalind",
      "Cupid",
      "Belinda",
      "Perdita",
      "Puck",
      "Mab",
      "Miranda",
      "Ariel",
      "Umbriel",
      "Titania",
      "Oberon",
      "Francisco",
      "Caliban",
      "Stephano",
      "Trinculo",
      "Sycorax",
      "Margaret",
      "Prospero",
      "Setebos",
      "Ferdinand"
    ],

    "Neptune": [
      "Naiad",
      "Thalassa",
      "Despina",
      "Galatea",
      "Larissa",
      "Proteus",
      "Triton",
      "Nereid",
      "Halimede",
      "Sao",
      "Laomedeia",
      "Psamathe",
      "Neso"
    ],

    "Pluto": [
      "Charon",
      "Styx",
      "Nix",
      "Kerberos",
      "Hydra"
    ]
}
let planets = Object.keys(planetsAndMoons);
let moons = Object.values(planetsAndMoons);
        planets.forEach(() => document.body.appendChild(document.createElement("div")).setAttribute("class", "planet"));

let divPlanets = document.querySelectorAll(".planet");
        divPlanets.forEach((item, i) => item.id = planets[i]);

let section = document.querySelector("section");
        divPlanets.forEach((item) => section.appendChild(item));

let divMoons = {};
let leftSide = 140;
for (let planet of planets) {
        divMoons[planet] = [];
    for (let [i, moon] of planetsAndMoons[planet].entries()) {
        divMoons[planet].push(document.querySelector(`#${planet}`).appendChild(document.createElement("div")));
        divMoons[planet][i].setAttribute("id", moon);
        divMoons[planet][i].setAttribute("class", "moon");
        
        divMoons[planet][i].style.left = `${leftSide}px`;
        leftSide += 24;
    }
    leftSide = 140;
}

let moonSelector = document.querySelectorAll(".moon");
    moonSelector.forEach((item) => item.style.top = "50px");
    divPlanets.forEach((item, i) => {
    item.appendChild(document.createElement("p")).textContent = planets[i];
    item.querySelector("p").style.color = "white";
    item.querySelector("p").style.fontSize = "25px";
});