
// create a test array with six letters
var choices = ["q", "w", "e", "r", "t", "y"];

 // create variables to hold the number of wins and losses. Initialize to 0
 // variable guess_limit starts at 3
 var wins = 0;
 var loses = 0;
 var guess_limit = 3; 

// Run this function whenever the user presses a key
document.onkeyup = function(event) {

    // determine what key the user clicks = User Guess
    // convert caps to lowercase
    var keychoice = event.key.toLowerCase();

    // Randomly choose letter from the choices array = Computer's guess
    var computerGuess = choices[Math.floor((Math.random() * choices.length))];

    // Get the guess ID, put into a variable and add keychoice to HTML with textContent
    var user_guess = document.getElementById("user_guess");
    user_guess.textContent = keychoice;

    // Get the computer_guess ID, put into a variable and add computerGuess to HTML with text Content
    var computer_guess = document.getElementById("computer_guess");
    computer_guess.textContent = computerGuess;

    // start the game only if user clicks a letter otherwise see else statement below
    // .indexOf() > -1 means the item is within the array
    if (choices.indexOf(keychoice) > -1) {

        // if no match
        if (keychoice != computerGuess) {
            // decrease guess limit and display on HTML
            guess_limit--;

            // thanks to Stack Overflow for this, kept getting [object HTMLSpanElement] instead of my guess limit displayed
            document.getElementById("guess_limit").textContent = guess_limit.toString();   


            // if guess limit = 0, increase loses and reset guess limit, display on HTML page
            if (guess_limit == 0) {
                loses++;                
                guess_limit = 3;

                document.getElementById("user_loses").textContent = loses.toString();
                document.getElementById("guess_limit").textContent = guess_limit.toString();

            }
        }
        // Match
        // increase wins and reset guess limit
        else {
            wins++;
            guess_limit = 3;

            document.getElementById("user_wins").textContent = wins.toString();
            document.getElementById("guess_limit").textContent = guess_limit.toString(); 
        }
    }

    // user did not click a letter
    // reset guess limit
    else {
        alert("Please click a letter on the keyboard to start the game!");
        guess_limit = 3;

    }
}