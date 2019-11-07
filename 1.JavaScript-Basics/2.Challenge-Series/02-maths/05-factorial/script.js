/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    


    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {
    var value = document.getElementById("number").value;
        // dit stukje gepikt van het internet
    function factorialize(num) {
        if (num < 0) 
              return -1;
        else if (num == 0) 
            return 1;
        else {
            return (num * factorialize(num - 1));
        }
      }
      var result = factorialize(value);
      alert(`de factorial van ${value} is ${result}`);

        // your code here

    });

})();

// When you click the button, get the number in the input, and show its factorial.
