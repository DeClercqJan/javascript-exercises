/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

table = ``
row = "";
    for (i = 0; i < 10; i++) {
        console.log("test_for_loop");
    row = row + "<td></td>"    
    }


table = `<table><tr>${row}</td></table>`

document.getElementById("target").innerHTML = table;

})();

/*

                <p>Inside the element with id "target", create an HTML table with 1 column and 10 rows.</p>
            </section>
            <section class="material">
                <div id="target"></div>

*/