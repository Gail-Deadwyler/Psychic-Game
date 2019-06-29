// document.onkeyup = function() {
//     alert("Hey, you pressed a key!");
// }

// create a test array with six letters
var choices = ["q", "w", "e", "r", "t", "y"];

 // creating variables to hold the number of wins and losses. They start at 0.
 var wins = 0;
 var loses = 0;

// Run this function whenever the user presses a key.
document.onkeyup = function(event) {

    // determine what key the user clicks - User Guess
    var keychoice = event.key;

    // Randomly choose letter from the choices array. This is the Computer's guess.
    var computerGuess = choices[Math.floor((Math.random() * choices.length))];

    alert("You clicked: " + keychoice);
    alert("The Computer was thinking of: " + computerGuess);

    if (keychoice === computerGuess){
        alert("You clicked " + keychoice + " and the PC thought " + computerGuess + " you win!");
        wins++;
        alert("You have " + wins + " wins");
    }
    else {
        alert("You clicked " + keychoice + " and the PC thought " + computerGuess + " you lose!");
        loses++;
        alert("You have " + loses + " loses");
    }


}