var game = require("./game.js");
var colors = require("colors");
var prompt = require("prompt");
var inquirer = require("inquirer");

//calling start game function
    startGame();

//startgame function
    function startGame() {
        //#1 first prompt when game starts
    	inquirer.prompt([
    		{
    			name: "startGame",
    			message: "Hello! Would you like to play hangame?",
    			type: "list",
    			choices: ["Yes", "No"]
    		}
    	]).then(function(ans){
    		if (ans.startGame === "Yes") {
				//calling a function to get a random word;
				console.log(`here is your word`);
				//
    		} else {
    			console.log('thats too bad, maybe next time.')
    		};
    	});
    };
