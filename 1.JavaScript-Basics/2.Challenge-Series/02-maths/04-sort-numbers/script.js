/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    // eerst verbergen om het dan te kunnen tonen 
    var values = document.getElementById("numbers").style.display = "none";
    
    document.getElementById("run").addEventListener("click", function() {
var values = document.getElementById("numbers").value;
console.log(values);
console.log(typeof values);
values_array = values.split(", ");
console.log(values_array);
console.log(typeof values_array);
// sorteren doet ie gelijk al uit zichzelf
var values = document.getElementById("numbers").style.display = "inline";
        // your code here

    });

})();

// On click to the button, get the numbers displayed in the input, and display them sorted in ascending order.

