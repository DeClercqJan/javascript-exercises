/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    console.log(document.getElementById("source").getAttribute("data-image"));
    let source_attribute = document.getElementById("source").getAttribute("data-image");
console.log(source_attribute);
// document.getElementById("source").innerHTML = "<h1>test_html</h1>"
document.getElementById("target").innerHTML = `<img src=${source_attribute}>`;
document.getElementById("source").remove;




})();

/*

Get the value of the "data-image" attribute from the element with id "source". Create a new image
element inside the target element that displays the image referred to by the attribute value. Then remove
the original element.</p>
</section>
<section class="material">
<span id="source" data-image="http://www.randomkittengenerator.com/cats/rotator.php"></span>

*/