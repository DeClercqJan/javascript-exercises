/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("target").innerHTML = localStorage.getItem("number");
    document.getElementById("increment").addEventListener("click", function() {
        // counter = localStorage.setItem('key', 'value');   
        // console.log(localStorage.getItem('key'));
        counter = localStorage.getItem("number");
        counter++
        console.log(counter);
        counter = localStorage.setItem("number", counter);
        document.getElementById("target").innerHTML = localStorage.getItem("number");
    })
})();

/*
        <div class="content">
            <section class="explain">
                <p>When you click the button, increment the counter by 1 and display the new value in the target
                    paragraph. Use <strong>localStorage</strong> to save the counter, and to read the counter value (and
                    display it) when the page is reloaded.</p>
            </section>
            <section class="material">
                <p id="target" class="counter">0</p>
                <div class="actions">
                    <button type="button" id="increment">Increment and store</button>
                </div>

*/