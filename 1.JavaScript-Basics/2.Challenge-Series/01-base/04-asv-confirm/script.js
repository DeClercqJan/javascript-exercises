/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
let age = prompt("how old are you?");
let gender = prompt("What is your gender?");
let town = prompt ("In which town do you live?");
    // your code here

let confirmation = confirm(`You are ${age} years old, are a ${gender} and you live in ${town}`)
if (confirmation) {
   alert("Thanks for the information"); 
}
else 
{
    alert("oops, we made a mistake. Please refresh the page to try again");
})();

/*
Ask three questions to the user: his/her Age, Gender, and the Town where he/she lives. Display the collected responses in a dialog box and ask to confirm. If not confirmed, re-run the process.
*/