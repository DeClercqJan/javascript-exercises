/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  original_number = document.getElementById("target").innerHTML;
  // console.log(original_number);
  button_html_collection = document.getElementsByTagName("button");
  // console.log(button_html_collection);
  button_array = Array.from(button_html_collection);
  //console.log(button_array);
  // console.log(button_array[2]);
//  console.log(button_array[0].innerHTML);

  // target_array = [];

  document.getElementById("part-two").innerHTML = 80;

  button_array.forEach(element => {
    //console.log(element);
    // element_html = element.innerHTML;
    // console.log(element_html);
    // element_data_min = element.getAttribute("data-min");
    // console.log(element_data_min);
    // element_data_max = element.getAttribute("data-max");
    // console.log(element_data_max);

    // EENS COUNTER UIT WEG RUIMEN OM TE ZIEN WAT DAT GEEFT
    // element.setAttribute("counter", 0);
    // element_target_counter = element.getAttribute("counter");

    // console.log(element_target_counter);
    element.addEventListener("click", function(element2) {
      // console.log(element2);
      // console.log(typeof element2);
      // BELANGRIJKE STAP!!!
      element2_target = element2.target;
      // console.log(element2_target);
      element2_target_id = element2.target.id;
      console.log(element2_target_id);
      element2_target_data_min = element2.target.getAttribute("data-min");
      // console.log(element2_target_data_min);
      element2_target_data_max = element2.target.getAttribute("data-max");
      console.log(element2_target_data_max);
      console.log(typeof element2_target_data_max);
      element2_target_value = element2.target.innerHTML;
      // console.log(element2_target_value);

      // console.log(typeof element2_target_value);
      // PROBLEEM: DIE COUNTER BLIJFT STIJGEN MET ALS NEGATIEF RESULTAAT DAT ALS JE OP 1 KNOP DRUKT EN DAN OP EEN ANDERE, DE KNOP NIET WORDT GERESET. 
      // OPGELOST

      // EENS COUNTER UIT WEG RUIMEN OM TE ZIEN WAT DAT GEEFT
      // element2_target_counter = element2.target.getAttribute("counter");
      // element2_target_new_counter = parseInt(element2_target_counter) + 1;
      // element2.target.setAttribute("counter", element2_target_new_counter);
      // console.log(element2_target_new_counter);

      // HIERONDER STUKJES OM 1) TE ZORGEN DAT HET BINNEN DE MAX BLIJFT + 2) ERVOOR TE ZORGEN DAT ENKELE CIJFERS EEN NUL KRIJGEN
      element2_target_new_value_number = parseInt(element2_target_value) + 1;
      if (element2_target_new_value_number  == parseInt(element2_target_data_max)+1) {
        console.log("test");
        console.log( element2_target_new_value_number);
        element2_target_new_value_number = element2_target_data_min;
        console.log( element2_target_new_value_number );
           }
      // console.log(element2_target_new_value_number);
      // console.log(typeof element2_target_new_value_number);
      element2_target_new_value = element2_target_new_value_number.toString();
      // console.log(typeof element2_target_new_value);
      // console.log(element2_target_new_value.length);
      if (element2_target_new_value.length < 2) {
        element2_target_new_value = `0${element2_target_new_value}`;
      }
      //console.log(element2_target_new_value.length);
      document.getElementById(element2_target_id).innerHTML = element2_target_new_value;

      // LAATSTE STAP ZIT IK OP VAST: IK MOET DE TARGET VERANDEREN MET IETS A LA target = value_id_1 + value_id_2+value_id_3 + value_id_4
      // IK DACHT HET IN EEN ARRAY TE STEKEN EN DIE DAN OP TE ROEPEN, MAAR DE FUT IS OP
      // object = {"test_id": element2_target_new_value};
      // target_array.push(object);
      // console.log(target_array)
      // SIMPELE OPLOSSING; KAN ALLICHT ELEGANTER
      document.getElementById("target").innerHTML = `0${document.getElementById("part-one").innerHTML}${document.getElementById("part-two").innerHTML}${document.getElementById("part-three").innerHTML}${document.getElementById("part-four").innerHTML}`;
        
    });
  });
  /*
  // HIERONDER EENS SNEL BEGINNEN SCHRIJVEN VOOR ALS IK HET AFZONDERLIJK VOOR ELK ZOU DOEN
  part_one_html = document.getElementById("part-one").innerHTML;
  part_one_html_min =  document.getElementById("part-one").getAttribute("data-min");
  console.log(part_one_html);
  console.log(part_one_html_min);
  value = 0;
  target = document.getElementById("target").innerHTML
  console.log(target);
i = 0;
  document.getElementById("part-one").addEventListener("click", function() {
      i++;
      part_one_html_value= parseInt(part_one_html_min)+i;
      console.log(part_one_html_value);
      document.getElementById("part-one").innerHTML = part_one_html_value;
      document.getElementById("target").innerHTML = `${part_one_html_value}`;   
  })
*/

  // document.getElementById("part-one").innerHTML = "test";
  /* button_array.forEach(function(element) {
    console.log(element);
    console.log(element.id);
    // IETS OM VERDER TE BEKIJKEN?
    switch(element.id) {
        case "part-one": console.log("test part One");
        break;

    }
  */
  // your code here
})();

/*
<section class="explain">
                <p>Another exercise in creating the worst possible user interface for dialing a phone number: every
                    click increases the selected number. Minimum and maximum values are as specified on each button by
                    the <em>data-min</em> and <em>data-max</em> attributes. Display the number (with a leading 0) in the
                    target paragraph.</p>
            </section>
            <section class="material">
                <p id="target">+460000000</p>
                <div class="actions">
                    <button type="button" id="part-one" data-min="460" data-max="499">460</button>
                    <button type="button" id="part-two" data-min="00" data-max="99">00</button>
                    <button type="button" id="part-three" data-min="00" data-max="99">00</button>
                    <button type="button" id="part-four" data-min="00" data-max="99">00</button>
*/
