/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function test() {
    return true;
}

(function() {
    return true;
})();


// Complete the script to make the calculator work. To do it use the switch. edit: hoe moet ik dit aanpakken? mss best iemand vragen om me op weg te helpen

var text;
var fruits = document.getElementById("myInput").value;

switch(fruits) {
  case "Banana":
    text = "Banana is good!";
    break;
  case "Orange":
    text = "I am not a fan of orange.";
    break;
  case "Apple":
    text = "How you like them apples?";
    break;
  default:
    text = "I have never heard of that fruit...";
} 