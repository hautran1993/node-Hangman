
//import letters
var Letter = require("./letter.js")
var word = ['hello', 'goodbye'];
var inquirer = require("inquirer");
var colors = require("colors");
var guesses = 8;

var Word = function() {
  this.wordArray = ['hello', 'goodbye', 'done Go home'];
  this.displayArr = [];
  //random function to get random words
  this.randomWord = function() {
    return this.wordArray[Math.floor(Math.random() * this.wordArray.length)].toLowerCase();
  };
  //nexword function to make underscores for words
  this.nextWord = function(currentWord) {
    //empty array to store underscore ready to display
    //loop to go through word array to push underscores
    var newLetter = new Letter(currentWord, this.currentGuess, this.displayArr);
    this.displayArr = newLetter.displayLetters();
    console.log(this.displayArr.join(" "));
  };
  //process the word, check if that letter is avaliable

};

module.exports = Word;
// function getRandomWord() {
//   return word[Math.floor(Math.random() * word.length)].toLowerCase();
// }

// function Word(randomWord) {
//   this.randomWord = randomWord;

//   this.ltrArray = function () {
//     var newLetter = new Letter(randomWord);
//     newLetter.letterArray(randomWord);
//   };
//   this.changeToUnderscore = function () {
//     var newLetter = new Letter(randomWord);
//     var randomWordArray = newLetter.letterArray(randomWord);
//     for (var i = 0; i < randomWordArray.length; i++) {
//       randomWordArray[i] = "_";
//       // console.log(randomWordArray.join(" "));
//     }
//     console.log(randomWordArray.join(" "));
//   };
// };

//function for hangman game logic
// function HangmanGame() {
//   this.guesses = 8;
//   this.wins = 0;
//   this.loss = 0;
//   this.word;
//   var that = this;

//   //this is the same thing as a property
//   this.startGame = function () {
//     inquirer.prompt([
//       {
//         name: "startGame",
//         message: "Hello! Would you like to play hangame?",
//         type: "list",
//         choices: ["Yes", "No"]
//       }
//     ]).then(function (ans) {
//       if (ans.startGame === "Yes") {
//         // call getRandomWord()
//         var randomWord = getRandomWord();
//         that.word = new Word(randomWord);
//         that.word.changeToUnderscore();
//         that.askForALetter(randomWord);
//         //calling a function to get the game started;
//       } else {
//         console.log("awwwhhh okay....maybe next time!")
//       };
//     });
//   };

//   this.askForALetter = function (word) {
//     inquirer.prompt([
//       {
//         name: "letter",
//         message: "pick a letter yo!",
//         type: "input"
//       }
//     ]).then(function (answer) {
//       if (word.indexOf(answer.letter) === -1) {
//         //decrement everytime the user guesses the wrong word.
//         that.guesses--;
//         wordArray += answer.letter
//         console.log(wordArray);
//         that.gameOver();
//         //function for where it'll push _ into words.
//         if (randomWord.includes(answer.letter) === true) {
//           for (var i = 0; i < word.length; i++) {
//               if (randomWord[i] === answer.letter) {
//                   displayWord = displayWord.substring(0, i) + randomWord[i] + word.substring(i + 1);
//               }
//           }
//         }
//       };
        
//       //check if a letter is inside the word
//       // if (answer.letter) {

//       // }
//       //decide if we keep goin
//       //if yes call askForALetter
//       that.askForALetter(word);
//       //else gameover, call this.startGame
//     }).catch(function (error) {
//         if (error) throw error;
//       });
//   };
//   //game over function to call when ever the game is over.
//   this.gameOver = function(word) {
//     if(this.guesses >= 8 ){
//       console.log('you loose my guy');
//     }else if(wordArray === word){
//       console.log('you win');
//     }else{
//     }
//   }
// };
// var game = new HangmanGame();
// game.startGame();  
  //   inquirer.prompt([
  //     {
  //     name: "play",
  //     message: "Would you like to play again",
  //     type: "list",
  //     choices: ["yes", "no"] 
  //   }
  // ]).then(function(ans){
  //     if(ans.play === "yes"){
        
  //     }
  //   })
  // } 

//if user input is inside of the word
//push to correctWord array
//run loop with randomwordarray then 
//if userinput is correct randomword[i] = userGuess;
//console.log(randomWordArray.join);
//else -- userguess
//testing lines 11 and 12 to see if it was connected
//calling the constructor function outside the function;

// game.askForALetter();

    // console.log(newWord.randomWord);
//are from letter.js converted to word


