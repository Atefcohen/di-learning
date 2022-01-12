let sentence = prompt("Give me the sentence");

let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");;

if (wordBad > (wordNot + 3))
    console.log(sentence.substring(0, wordNot) + "good" + sentence.substring(wordBad + 3, sentence.length));
else
    console.log(sentence);

