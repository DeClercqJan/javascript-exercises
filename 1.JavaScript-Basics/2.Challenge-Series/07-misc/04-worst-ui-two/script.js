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
  button_html_collection = document.getElementsByTagName("button");
  console.log(button_html_collection);
  button_array = Array.from(button_html_collection);
  console.log(button_array);
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
  
  // document.getElementById("part-one").innerHTML = "test";
  /* button_array.forEach(function(element) {
    console.log(element);
    console.log(element.id);
    // IETS OM VERDER TE BEKIJKEN?
    switch(element.id) {
        case "part-one": console.log("test part One");
        break;

    }
    // DIT HIERONDER GAT NERGES NAARTOE
    element.addEventListener("click", function (element_2) {
        console.log(element_2);
        console.log(typeof element_2);
    })
    element_data_min = element.getAttribute("data-min");
    console.log(element_data_min);

  });
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
