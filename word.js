 //import letters
var Letter = require("./letter.js")
var word = ['hello', 'goodbye'];
var inquirer = require("inquirer");
var colors = require("colors");
var guesses = 8;

function getRandomWord() {
  return word[Math.floor(Math.random() * word.length)].toLowerCase();
}

function Word(randomWord) {
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

//function for hangman game logic
function HangmanGame(){
  this.guesses = 8;
  this.wins = 0;
  this.loss = 0;
  this.word;
}; 
//-------prototype fuction inside of 

//this is the same thing as a property
HangmanGame.prototype.startGame = function() {
  inquirer.prompt([
    {
      name: "startGame",
      message: "Hello! Would you like to play hangame?",
      type: "list",
      choices: ["Yes", "No"]
    }
  ]).then(function(ans){
    if (ans.startGame === "Yes") {
      // call getRandomWord()
      var randomWord =  getRandomWord();
      this.word = new Word(randomWord);
      this.word.changeToUnderscore();
      this.askForALetter();

    //calling a function to get the game started;
    } else {
      console.log("awwwhhh okay....maybe next time!")
    };
  });
};

HangmanGame.prototype.askForALetter = function () {
  inquirer.prompt([
    {
      name:"letter",
      message:"pick a letter yo!",
      type:"list",
      choices: [this.guesses]
    }
    ]).then(function(answer){
      if(this.getRandomWord === this.user.guess){
      //decrement everytime the user guesses the wrong word.
      this.guesses--;
      }
        //check if a letter is inside the word
        this.word.guess(answer.letter)
        if(answer.letter){

        }
        //decide if we keep goin
          //if yes call askForALetter
          askForALetter();
            //else gameover, call this.startGame
    });
};


//if user input is inside of the word
  //push to correctWord array
    //run loop with randomwordarray then 
      //if userinput is correct randomword[i] = userGuess;
      //console.log(randomWordArray.join);
  //else -- userguess
//testing lines 11 and 12 to see if it was connected
//calling the constructor function outside the function;


var game = new HangmanGame();
game.startGame();
game.askForALetter();
    
    // console.log(newWord.randomWord);
//are from letter.js converted to word

// module.exports = WordConstructor;

