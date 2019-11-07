/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    // your code here

document.getElementById("run").addEventListener("click", function () {
    if (fruits.find(find_fruit_type)) {
        console.log("yes");
    }
    else {
        console.log("no");
    }

    function find_fruit_type (element) {
return element == "orange";
    }
});

})();

/*
<p>When you click the button, log in the console if, yes or no, there is an <em>apple</em> in the array <strong>fruits</strong>.</p>
*/
