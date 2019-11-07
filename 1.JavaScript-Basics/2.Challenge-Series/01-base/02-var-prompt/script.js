/* becode/javascript
 *
 * /01-base/02-var-prompt/script.js - 1.2: var & prompt
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let name = window.prompt("please enter your name");
    if (name )
    {
alert (`Hello, ${name}`);
    }
    else 
    {
alert ("Hello, stranger");
    }

})();

// Ask the name of the user, and display in the dialog box the following welcome message : Hello, [name] !.