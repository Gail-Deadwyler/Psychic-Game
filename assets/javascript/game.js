
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



    // alert("You clicked: " + keychoice);
    // alert("The Computer was thinking of: " + computerGuess);

    // only start the game if user clicks a letter
    // .indexOf() > -1 means the item is within the array
    if (choices.indexOf(keychoice) > -1) {

        // if no match
        if (keychoice != computerGuess) {
            // decrease guess limit
            guess_limit--; 
            alert ("guess limit is " + guess_limit);

            // if guess limit = 0, increase loses and reset guess limit
            if (guess_limit == 0) {
                loses++;                
                guess_limit = 3;
                alert("you are out of gueses and now have " + loses + " loses");
                alert ("guess limit is " + guess_limit);
            }
        }
        // Match
        // increase wins and reset guess limit
        else {
            wins++;
            guess_limit = 3;
            alert("You have " + wins + " wins");
            alert ("guess limit is " + guess_limit);
        }
    }

    // user did not click a letter
    // reset guess limit
    else {
        alert("Please click a letter on the keyboard to start the game!");
        guess_limit = 3;

    }

    




    // while no match AND out_of_guesses NOT EQUAL to false

    // while (keychoice != computerGuess && !out_of_guesses) {

    //     if (guess_count < guess_limit) {

    //         guess_count++;
    //         // alert("guess count: " + guess_count);
    //     }
    //     else {
    //         out_of_guesses = true;
    //     }
    // }

    // if (keychoice == computerGuess){

    //     wins++;
    //     alert("You win!")
    //     alert("You have " + wins + " wins");

    // }
    // else {
    //     loses++;
    //     alert("Out of guesses!");        
    //     alert("You have " + loses + " loses");

    // }

    // if (out_of_guesses) {

    //     // alert("You clicked " + keychoice + " and the PC thought " + computerGuess + " you lose!");
    //     loses++;
    //     alert("Out of guesses!");        
    //     alert("You have " + loses + " loses");
    // }
    // else {
    //     // alert("You clicked " + keychoice + " and the PC thought " + computerGuess + " you win!");
    //     wins++;
    //     alert("You win!")
    //     alert("You have " + wins + " wins");

    // }



    // if (keychoice === computerGuess){
    //     alert("You clicked " + keychoice + " and the PC thought " + computerGuess + " you win!");
    //     wins++;
    //     alert("You have " + wins + " wins");
    // }
    // else {
    //     alert("You clicked " + keychoice + " and the PC thought " + computerGuess + " you lose!");
    //     loses++;
    //     alert("You have " + loses + " loses");
    // }


}