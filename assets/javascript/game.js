
// create a array of the alphabets - thanks to Stack Overflow for this
var choices = "abcdefghijklmnopqrstuvwxyz".split("");
// console.log(choices);

 // create variables to hold the number of wins and losses. Initialize to 0
 // variable guess_limit starts at 9
 // create empty keychoice tally array
 var wins = 0;
 var loses = 0;
 var guess_limit = 9; 
 var keychoice_tally = [];

// Run this function whenever the user presses a key
document.onkeyup = function(event) {

    // determine what key the user clicks = User Guess
    // convert caps to lowercase
    var keychoice = event.key.toLowerCase();

    // append keychoice to keychoice_tally array
    keychoice_tally.push(keychoice);
    // console.log(keychoice_tally);

    // Randomly choose letter from the choices array = Computer's guess
    var computerGuess = choices[Math.floor((Math.random() * choices.length))];

    // Get the guess ID, put into a variable and add keychoice to HTML with textContent
    var user_guess = document.getElementById("user_guess");
    user_guess.textContent = keychoice;

    // Get the computer_guess ID, put into a variable and add computerGuess to HTML with text Content
    var computer_guess = document.getElementById("computer_guess");
    computer_guess.textContent = computerGuess;

    // start the game only if user clicks a letter otherwise don't start the game
    // .indexOf() > -1 means the item is within the array
    if (choices.indexOf(keychoice) > -1) {

        // if no match
        if (keychoice != computerGuess) {

            // decrease guess limit and display on HTML
            guess_limit--;

            // thanks to Stack Overflow for this, kept getting [object HTMLSpanElement] instead of my guess limit displayed
            document.getElementById("guess_limit").textContent = guess_limit.toString(); 
            
            // display keychoices so far
            var display_keychoice_tally = document.getElementById("guesses_so_far");
            display_keychoice_tally.textContent = keychoice_tally;


            // if guess limit = 0, increase loses, reset guess limit, empty out keychoice tally array
            // clear out computer_guess, clear out user_guess, display on HTML page
            if (guess_limit == 0) {
                loses++;                
                guess_limit = 9;
                keychoice_tally = [];

                document.getElementById("user_guess").textContent = " ";
                document.getElementById("computer_guess").textContent = " ";

                document.getElementById("user_loses").textContent = loses.toString();
                document.getElementById("guess_limit").textContent = guess_limit.toString();
                display_keychoice_tally.textContent = keychoice_tally;
            }
        }
        // Match
        // increase wins, reset guess limit, empty out keychoice tally array
        // clear out computer_guess, clear out user_guess, display on HTML page
        else {
            wins++;
            guess_limit = 9;
            keychoice_tally = [];

            document.getElementById("user_guess").textContent = " ";
            document.getElementById("computer_guess").textContent = " ";

            document.getElementById("user_wins").textContent = wins.toString();
            document.getElementById("guess_limit").textContent = guess_limit.toString();
            var display_keychoice_tally = document.getElementById("guesses_so_far");
            display_keychoice_tally.textContent = keychoice_tally; 
        }
    }

    // user did not click a letter
    // reset guess limit, empty out keychoice tally array
    else {
        alert("Please click a letter on the keyboard to start the game!");
        guess_limit = 9;
        keychoice_tally = [];
        
        document.getElementById("user_guess").textContent = " ";
        document.getElementById("computer_guess").textContent = " ";
       

    }
}