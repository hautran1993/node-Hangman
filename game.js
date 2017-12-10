var Word = require("./word.js");
var inquirer = require("inquirer");
console.log("yo this be game");

function HangmanGame() {
    this.guesses = 8;
    this.wins = 0;
    this.loss = 0;
    this.word;
    var that = this;  
    //this is the same thing as a property
    this.startGame = function() {
      inquirer.prompt([
        {
        name: "startGame",
        message: "Hello! Would you like to play hangame?",
        type: "list",
        choices: ["Yes", "No"]
        }
      ]).then(function(ans) {
        if (ans.startGame === "Yes") {
          var word1 = new Word()
          this.collectWord();
          // // call getRandomWord()
          // var randomWord = getRandomWord();
          // that.word = new Word(randomWord);
          // that.word.changeToUnderscore();
          // that.askForALetter(randomWord);
          // //calling a function to get the game started;
        } else {
          console.log("awwwhhh okay....maybe next time!")
        };
      });
  };
    this.collectWord = function() {
      inquirer.prompt([
        {
        name: "letter",
        message: "pick a letter",
        type: "list"  
        }
      ]).then(function(ans) {
        if(ans.letter === this.currentGuess) {
          console.log("this");
        // }else{
        };
      });
    };
};

var word1 = new Word();
var currentWord = word1.randomWord();
console.log(word1.nextWord(currentWord));
var hangman = new HangmanGame();
hangman.startGame();

// function GameConstructor() {
//   this.newWordArray = function() {
//     var newWord = new Word(randomWord);
//     newWord.ltrArray();
//   };
// };
// var word1 = new GameConstructor();
// console.log(word1.newWordArray); 
// module.exports = GameConstructor;
//initaialze the game;
  //set all variable to start game
  //set Game over to false
  //set current guesses to 0
// display the prompt to the user using inquierer
   //take the current word and display currrent
   //word with under scores
   // get user input is valid with Letter.valid

   //if input valid
             //check user letter guessed vs current word
             //if match
          //update current word
             //else
                    //remove guess
                    //if current guess < 0.
                    //game over = true;
                              //reset the game
                    //else
                              //prompt user new guess(recursive)
  //else
    // tell user input invalid please input proper guess
       //prompt for new user guess(recursive)
//promp user for game representing
  // if user whats to play again
  //start game
  //prompt game to play again



//function show dashes {
//run a loop for letters, and replace letters with underscores(_)
//regular call letter.js by var
//}
//function hang{
//user input, will take inquire code and prompt
// var guesses available = 10
//    -var wrong guesses [] <=display
//    -var right guesses []
//    -var win = 0
//    -var looses = 0
//  //call function dashes
// if guesses is available is greater than 0{
  //take users guesses through inquirer
      //-inquire.prompt
      //-check letter is wrong or right
      //
      //run a loop for letter then use if statement to check if the word is correct and push accordingly
      //if right push to right guesses
      //if wropng push to wrong guesses
          //guesses available --
      //
    //----}----//else game over
//}

//function startgame{
//inquirer.prompt do you want to play a game
//if yes take to previous function
//call function hang()
//if no game ===over
//}

//
