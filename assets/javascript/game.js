// document.onkeyup = function() {
//     alert("Hey, you pressed a key!");
// }

// create a test array with six letters
var choices = ["q", "w", "e", "r", "t", "y"];

// Run this function whenever the user presses a key.
document.onkeyup = function(event) {

    // determine what key the user clicks
    var keychoice = event.key;

    // Randomly choose letter from the choices array. This is the Computer's guess.
    var computerGuess = choices[Math.floor((Math.random() * choices.length))];

    alert("You clicked: " + keychoice);
    alert("The Computer was thinking of: " + computerGuess);


}