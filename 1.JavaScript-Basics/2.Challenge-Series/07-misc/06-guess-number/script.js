/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  // your code here

  window.onload(setNumber());

  function setNumber() {
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    }
    random_number = getRandomIntInclusive(1, 100);

    console.log(random_number);

    guess = prompt("Guess the number");
    
    number_of_guesses = 0;

    guessNumber();

    function guessNumber() {
      if (guess > random_number) {
        guess = prompt("try a lower number!");
        number_of_guesses++;
        guessNumber();
      } else if (guess < random_number) {
        number_of_guesses++;
        guess = prompt("try a higher number!");
        guessNumber();
      } else if (guess == random_number) {
        number_of_guesses++;
        guess = alert(`hurray, you did it in ${number_of_guesses} guesses`);
      }
    }
  }
})();

/*
 <p>When the page is loaded, the script picks a number (X) between 1 and 100 and then asks the user to
guess that number. For each guess, the script responds "higher" or "lower" if X is higher - or lower
- than the user's guess, or "that's it!" when the guess is correct, as well as "you needed Y
guesses" (where Y is the number of guesses).</p>
*/
