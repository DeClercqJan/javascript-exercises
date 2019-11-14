/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  // your code here

  // VEEL VALT TE PIKKEN/AAN TE PASSEN UIT VORIGE OEFENING
  slot_html_collection = document.getElementsByClassName("slot");
  console.log(slot_html_collection);
  slot_array = Array.from(slot_html_collection);
  console.log(slot_array);

  slot_array.forEach(element => {
    console.log(element);
    element_input = element.firstElementChild;
    // console.log(element_input);
    element_button = element.lastElementChild;
    // console.log(element_button);
    element_data_min = element.firstElementChild.getAttribute("data-min");
    // console.log(element_data_min);
    element_data_max = element.firstElementChild.getAttribute("data-max");
    // console.log(element_data_max);
    // IDEETJE: wat pikken van de typewriteroefening? als het een slotmachine moet zijn, dan moet het constant bewegen
    for (var i = element_data_min; i <= element_data_max; i++) {
      // EENS CHECKEN OF IK AAN MIJN ELEMENT KAN
      // console.log(element.firstElementChild.getAttribute("id"));
      element_id = element.firstElementChild.getAttribute("id");
      // console.log(element_id);
      element_value = element.firstElementChild.getAttribute("value");
      // console.log(element_value);
      (function(i) {
        setTimeout(function() {
          element.firstElementChild.setAttribute("value", i);
        }, 100 * i);
      })(i);        
      // TO DO: ZORGEN DAT HET OOK LOOPT VOOR DE EERSTE INPIUT
      // TO DO: RESETTEN ZODAT DE LOOP BLIJFT LOPEN
      // TO DO: DE STOPKNOP WERKT NIET ZOALS HET HOORT. HIJ STOPT ENKEL HET LOPEN VAN DE SLOTMACHINE VAN HET INPUTVELD DAT BIJ DE KNOP HOORT
      // EVENTUEEL: NOG BETER ZOU ZIJN ALS JE HET SLOTMACHINE KAN STOPPEN OP HET PUNT WAAR HIJ ZIT
      /*
      if (element2_target_new_value_number  == parseInt(element2_target_data_max)+1) {
            console.log("test");
            console.log( element2_target_new_value_number);
            element2_target_new_value_number = element2_target_data_min;
            console.log( element2_target_new_value_number );
               }
               */
    }
    /*
    var list = [];
    for (var i = element_data_min; i <= element_data_max; i++) {
      // list.push(i);
      // console.log(i);
      console.log(element);
    }
*/
    element_button.addEventListener("click", function(element2) {
      console.log("test");
      console.log(element2);
      element_sibling = element2.srcElement.previousElementSibling;
      console.log(element_sibling);
      element_data_min = element2.srcElement.previousElementSibling.getAttribute(
        "data-min"
      );
      console.log(element_data_min);
      element_data_max = element2.srcElement.previousElementSibling.getAttribute(
        "data-max"
      );
      console.log(element_data_max);
      // console.log(typeof element2);
      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
      }
      random_number = getRandomIntInclusive(element_data_min, element_data_max);
      console.log(random_number);
      random_number_string = random_number.toString();
      if (random_number_string.length < 2) {
        random_number_string = `0${random_number_string}`;
      }
      element_sibling.value = random_number_string;
      document.getElementById("target").innerHTML = `0${
        document.getElementById("part-one").value
      }${document.getElementById("part-two").value}${
        document.getElementById("part-three").value
      }${document.getElementById("part-four").value}`;
    });
  });
  // eerst eens voor 1'tje doen. lukt wel om iets random te pakken, maar is het dit wat gevraagd wordt?
  /*
data_min_string = document.getElementById("part-one").getAttribute("data-min");
console.log(data_min_string);
console.log(typeof data_min_string);
data_min = parseInt(data_min_string);
console.log(data_min);
console.log(typeof data_min);
data_max_string = document.getElementById("part-one").getAttribute("data-max");
data_max = parseInt(data_max_string);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

test = getRandomIntInclusive(data_min, data_max);
console.log(test);
*/
})();

/*

            <section class="explain">
                <p>One more exercise in creating the worst possible user interface for dialing a phone number: each set
                    of numbers behaves as a slot machine in the casino. When you click a button, a random value is
                    picked between the values specified by the <em>data-min</em> and <em>data-max</em> attributes.
                    Display the number (with a leading 0) in the target paragraph.</p>
            </section>
            <section class="material">
                <p id="target">+460000000</p>
                <form action="#" method="post">
                    <div class="field slot">
                        <input type="text" name="part-one" id="part-one" value="460" data-min="460" data-max="499" />
                        <button type="button" id="fix-part-one">Stop</button>
                    </div>
                    <div class="field slot">
                        <input type="text" name="part-two" id="part-two" value="00" data-min="00" data-max="99" />
                        <button type="button" id="fix-part-two">Stop</button>
                    </div>
                    <div class="field slot">
                        <input type="text" name="part-three" id="part-three" value="00" data-min="00" data-max="99" />
                        <button type="button" id="fix-part-three">Stop</button>
                    </div>
                    <div class="field slot">
                        <input type="text" name="part-four" id="part-four" value="00" data-min="00" data-max="99" />
                        <button type="button" id="fix-part-four">Stop</button>
                    </div>

*/
