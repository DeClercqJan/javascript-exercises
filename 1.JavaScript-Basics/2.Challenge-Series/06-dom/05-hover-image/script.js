/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

console.log(document.querySelector(".material figure img"));
console.log(document.querySelector(".material figure img").getAttribute("src"));
console.log(document.querySelector(".material figure img").getAttribute("data-hover"));

img_src_original = document.querySelector(".material figure img").getAttribute("src");
data_hover = document.querySelector(".material figure img").getAttribute("data-hover");

// TO DO: nog aanpassen dat het hover is en geen click + het moet ook nog terug naar de normale staat worden gezet.
document.querySelector(".material figure img").addEventListener("mouseover", function () {
    document.querySelector(".material figure img").setAttribute("src", data_hover);
})

document.querySelector(".material figure img").addEventListener("mouseout", function () {
    document.querySelector(".material figure img").setAttribute("src", img_src_original);
})

})();

/*
        <p>When hovering over the image, change its source attribute to the value specified in the "data-hover"
          attribute.</p>
      </section>
      <section class="material">
        <figure>
          <img src="../../_shared/img/kiss.svg" alt="Kiss?" data-hover="../../_shared/img/kiss-wink-heart.svg" />
        </figure>
*/