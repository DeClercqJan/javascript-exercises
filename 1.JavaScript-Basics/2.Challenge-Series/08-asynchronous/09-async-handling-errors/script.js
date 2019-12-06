/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.querySelector("#run").addEventListener("click", async function () {
        try {
               persons = await window.lib.getPersons();
                console.log(persons);
            }
        catch {
            console.error("foutje!");
        }
    })
    // your code here
})();

/*
 The function window.lib.getPersons() is available in the script. It returns a Promise that will be resolved, after a short delay, with a table of people.
<br />When you click on the button, call the getPersons function and display the result obtained in the console. Warning: the Promise returned by the getPersons function has more or less a half chance of being rejected with an error. If so, use console.error() to display it.
<strong>Note :</strong> for this exercise, use the syntax <em>async/await</em>.
*/