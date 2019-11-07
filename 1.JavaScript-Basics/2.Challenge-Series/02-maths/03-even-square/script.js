/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  document.getElementById("run").addEventListener("click", function() {
    // your code here
    // to do: hoe het allemaal in 1 keer laten doen
    /* dit werkt om alles in 1 alertkader te krijgen, maar de lijst start wel met undefined 
        for (i = 1; i < 22; i++)
        {
        var roots = roots + `De vierkantwortel van ${i} is ${Math.sqrt(i)} \n`;
        }
        alert(roots);
    */
   // hieronder opnieuw gedaan door alles eerst in een array te steken en dan die arrays aan elkaar te plakken in een string en die dan in 1 keer in het alertvenster zetten
   var roots = [];
    for (i = 1; i < 22; i++) {
var root = `De vierkantwortel van ${i} is ${Math.sqrt(i)} \n`;
roots.push(root);
    }
    console.log(roots);
    all_roots = roots.join("");
    console.log(all_roots);
    console.log(typeof all_roots);
    alert(all_roots);

  });
})();
