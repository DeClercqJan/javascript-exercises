/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here

console.log(document.querySelector(".material figure img"));
console.log(gallery[0]);

img_number = document.querySelector(".material figure img");
console.log(img_number);
i = 0

document.getElementById("next").addEventListener("click", function() {    console.log("test knop");
    document.querySelector(".material figure img").setAttribute("src",gallery[i]);
    i++;
    console.log(i);
})

})();

/* 
        <p>When you click the button, change the source of the image to the next one listed in the
          <strong>gallery</strong> array.</p>
      </section>
      <section class="material">
        <figure>
          <img src="../../_shared/img/bell.svg" alt="Carousel" />
        </figure>
        <div class="actions">
          <button type="button" id="next">Next image</button>

*/ 
