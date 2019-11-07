// deze uitgeschakeld, want ik kreeg foutmelding
// import { setupMaster } from "cluster";

// edit: deze import hieronder heb ik in commentaar gezet, want ik kreeg foutmelding
// import { cpus } from "os";

/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  // your code here

  document.getElementById("run").addEventListener("click", function() {
    var numbers = [];
    for (i = 0; i < 10; i++) {
      random_number = getRandomInt(1, 100);
      numbers.push(random_number);
    }

    // van het internet gepikt
    console.log(numbers);
    let typeof1 = typeof numbers;
    console.log(typeof1);
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    for (i = 0; i <= 9; i++) {
      console.log(i + 1);
      document.getElementById(`n-${i + 1}`).innerHTML = numbers[i];
    }

    // ik weet niet goed wat dit doet; ik vermoed dat het zo gaat: hele de array wordt agegaan en dan worden de waarden meegenomen naar de current value en telkens de nieuwe value is de accumator
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    smallest_number = Math.min(...numbers);
    biggest_number = Math.max(...numbers);
    sum_numbers = numbers.reduce(reducer);
    numbers_length = numbers.length;
    average_number = sum_numbers / numbers_length;

    document.getElementById("min").innerHTML = smallest_number;
    document.getElementById("max").innerHTML = biggest_number;
    document.getElementById("sum").innerHTML = sum_numbers;
    document.getElementById("average").innerHTML = average_number;
  });
})();

/*
<p>When you click the button, display the ten elements of an array of 
10 numbers (between 1 and 100) in the table. Then display in the definition list: 
the smallest number, the biggest number, the sum of all numbers, and their average.</p>
<dt>the smallest number:</dt>
<dt>the biggest number:</dt>
<dt>Sum of all numbers:</dt>
<dd id="sum">-</dd>
<dt>Average of all numbers:</dt>
<dd id="average">-</dd>
*/
