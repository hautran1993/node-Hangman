//import letters
var Letter = require("./letter.js")
var lettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

var availiable = new Letter(lettersArr);

function Words() {
    this.checkGuess = function() {
        console.log(lettersArr);
    }
}
module.exports = Words

//pick a word insdie of the word function
  //select current word

//function pick word
  //return random word

//display the current word to the user(displayword)
  //displayword = letter.updatecurrentword(currentword)
  //return the random word for the word array


//update the display word, when the suer guesses right
//create an array of words
//by using randomword function
// check aray for random words

//check user guess vs user word
// export this file into letter.js
//exports.modole

//process if user is wrong or right
