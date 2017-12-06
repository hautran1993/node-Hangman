 //import letters
var Letter = require("./letter.js")
var word = ['hello', 'goodbye'];
var inquirer = require("inquirer");
var colors = require("colors");
var randomWord = word[Math.floor(Math.random() * word.length)].toLowerCase(); 

function WordConstructor(randomWord) {
   this.randomWord = randomWord;
   this.ltrArray = function() {
    var newLetter = new Letter(randomWord);
    newLetter.letterArray(randomWord);     
   }; 
   this.changeToUnderscore = function() {
    var newLetter = new Letter(randomWord);
    var randomWordArray =  newLetter.letterArray(randomWord); 
      for (var i = 0; i < randomWordArray.length; i++) {
        randomWordArray[i] = "_";
        // console.log(randomWordArray.join(" "));
      }
      console.log(randomWordArray.join(" "));  
   };
};
    //this is the same thing as a property
    WordConstructor.prototype.UserGuess = function() {
      inquirer.prompt{

      }.then
      //if user input is inside of the word
        //push to correctWord array
          //run loop with randomwordarray then 
            //if userinput is correct randomword[i] = userGuess;
            //console.log(randomWordArray.join);
        //else -- userguess
    }
    //testing lines 11 and 12 to see if it was connected
    //calling the constructor function outside the function;
    var newWord = new WordConstructor(randomWord);
    newWord.changeToUnderscore();
    // console.log(newWord.randomWord);
//are from letter.js converted to word

// module.exports = WordConstructor;

