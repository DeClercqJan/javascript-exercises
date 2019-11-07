/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    (function() {

        // your code here
    
        function changeBackground(color) {
            document.body.style.background = color;
         }
    
         // 'k moest ook een eventlistener op die input field zetten, anders haperde het en crashte de boel wel een keer

         
       document.getElementById("run").addEventListener("click", function() {
           // de min is 1 omdat 10 zal vertaald worden naar 0
           var color = `#${getRandomInt (1, 16)}${getRandomInt (1, 16)}${getRandomInt (1, 16)}${getRandomInt (1, 16)}${getRandomInt (1, 16)}${getRandomInt (1, 16)}`; 

           function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            random = (Math.floor(Math.random() * (max - min)) + min);
            console.log(random);
            // hieronder zitten prutsen om de boel hexadecimaal te maken
            switch(random) {
                // van 10 maak ik 0, anders heb je variabele lengte van kleuren.
                case 10:
                    random = 0;
                case 11:
                random = "a";
                break;
                case 12:
                    random = "b";
                  // code block
                  break;
                  case 13:
                      random = "c";
                      case 14:
                            random = "d";  
                            case 15:
                                    random = "e";  
                                    case 16:
                                            random = "f";  
                default: 
                random = random;
              } 
            console.log(random);
            return random;
          }

           console.log(color);
           changeBackground(color);
        });
    
      /*  
    var crypto = require('crypto')

function randomValueHex(len) {
  return crypto
    .randomBytes(Math.ceil(len / 2))
    .toString('hex') // convert to hexadecimal format
    .slice(0, len) // return required number of characters
}

var value1 = randomValueHex(12) // value 'd5be8583137b'
var value2 = randomValueHex(2) // value 'd9'
var value3 = randomValueHex(7) // value 'ad0fc8c'
*/

    })();
    


})();
