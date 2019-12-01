/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    function callback (error, people) {
        if (error) {
            console.log(error);
            // ik: console.error is gelijk uitgebr
            console.error(error);
        }
        if (people) {
            console.log(people);
        }

    }

    document.getElementById("run").addEventListener("click", function() {
        window.lib.getPersons(callback);
    })

})();

/*
<p>The window.lib.getPersons() function is available in the script. It must receive a callback parameter. After a short delay, the callback will be executed with two parameters: the first contains an error (if there is one, otherwise null), the second an array of people.</p>
 <p>At the click of the button, call the function getPersons and display the result obtained in the console. Warning: the function getPersons has more or less a chance in two to generate an error. If so, use console.error () to display it. </p>
</section>
<section class="material">
<div class="actions">
<button type="button" id="run">Run the script</button>
*/