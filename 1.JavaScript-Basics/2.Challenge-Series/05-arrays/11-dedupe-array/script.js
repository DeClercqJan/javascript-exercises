/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
console.log(fruits);

// idee van https://wsvincent.com/javascript-remove-duplicates-array/: set kan enkel unieke zaken omvatten
let unique = [...new Set(fruits)];
console.log(unique); // 'John', 'Paul', 'George', 'Ringo'


// idee2 van https://wsvincent.com/javascript-remove-duplicates-array/ vat ik eigenlijk niet ...?
/* let x = (fruits) => fruits.filter((v,i) => fruits.indexOf(v) === i)
x(fruits);
console.log(x(fruits));    
*/

// idee3 van https://wsvincent.com/javascript-remove-duplicates-array/  vat ik eigenlijk ook niet
/*function removeDups(fruits) {
  let unique = {};
  fruits.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}

unique_fruits = removeDups(fruits); // // 'John', 'Paul', 'George', 'Ringo'
console.log(unique_fruits);
*/
})();

// When you click the button, remove the duplicates from the array fruits and display the resulting array in the console.
//  Each value should be there one time, and one time only.