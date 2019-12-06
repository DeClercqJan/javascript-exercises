/* becode/javascript
 *
 * /10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", function () {
        console.log("test");
        window.lib.getPersons()
        .then (result => console.log(result))
        .catch(error => console.error(error));
    })
})();

/*
<p>The function window.lib.getPersons() is available in the script. It returns a Promise that will be resolved, after a short delay, with a table of people.
<p>When you click on the button, call the getPersons function and display the result obtained in the console. Warning: the Promise returned by the getPersons function has more or less a half chance of being rejected with an error. If so, use console.error() to display it).</p>

*/