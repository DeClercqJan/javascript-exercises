/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    function changeBackground(color) {
        document.body.style.background = color;
     }

     // 'k moest ook een eventlistener op die input field zetten, anders haperde het en crashte de boel wel een keer
   document.getElementById("color").addEventListener("change", function() {color = document.getElementById("color").value});
   document.getElementById("run").addEventListener("click", function() {changeBackground(color)});


})();
