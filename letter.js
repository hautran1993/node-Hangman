 //constructor for letters

var Letter = function(currentWord, currentGuess, displayArr) {
  this.currentWord = currentWord;
  this.currentGuess = currentGuess;
  this.displayArr = displayArr;
  this.displayLetters = function() {
    for (var i = 0; i < currentWord.length; i++) {
//if current guess is blank
      if(this.currentGuess !== ""){
        if(this.currentWord[i] === " "){
          displayArr.push(" ");
        }else if(this.currentWord[i] === this.currentGuess){
          displayArr.push(this.currentGuess);
        }else{
          displayArr.push("_");
        };
      }else{
// if else statement to decided to push _ or space with multiple words
        if(currentWord[i] === " "){
          displayArr.push(" ");
        }else{
          displayArr.push("_");
        };
      }
    };
    return displayArr;
  };
};
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
