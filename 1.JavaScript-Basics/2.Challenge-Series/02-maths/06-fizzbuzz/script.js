/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  for (i = 1; i <= 100; i++) {
    // OPGELET: de volgorde is belangrijk bij deze elseif statements. Die voor beide condities moet eerst komen precies
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    } else if (i % 3 == 0) {
      //           console.log(`${i} is een meervoud van 3`);
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
  // your code here
})();

/*
In the console, for each numbers between 1 and 100 : show "fizz" if the number is a multiple of 3, 
"buzz" if it's a multiple of 5, "fizzbuzz" if it's both, or simply the number if it's none of these.
*/
