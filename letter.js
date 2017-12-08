 //constructor for letters

var Letter = function(randomWord) {
  this.avaliableWord = randomWord;
  this.letterArray = function(randomWord) {
    //splitting the word from random word array randomWord.split("");
    console.log(randomWord.split(""));
      return randomWord.split("");
     ;
  }
  console.log("yo this letter")
};
var letter1 = new Letter();
module.exports = Letter;

//display word in the form of underscored(_)
//update current letter based on user guesses
//if user guesses right then show letter
//send update to word
  //send user letter guess to letter with current word
  //function checkword(currentWord,currentguess)
    //remove current guess from avalable guess
    //return current guess is in current word

  //function checkUser guess (currentword, currentGuess)
    //return if currentGuess is current word

  //function checkuserguessValid(currentGuess)

    //return if current guess matches avalible guesses
        //if so
          //return the userGuess
        //else
            //return userGuess invalid
//in letter , has underscores and changes underscores back to //word.
