/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    target_class_node = document.getElementsByClassName("target");
console.log(target_class_node);  

    for (i = 0; i < target_class_node.length; i++) {
        document.getElementsByClassName("target")[i].innerHTML = "test";
    }
})();

/*

                <p>Select the elements with the class "target" and replace their content with "owned"</p>
            </section>
            <section class="material">
                <p class="target">Haha, vous ne me changerez jamais !</p>
                <p class="target">Moi non plus !</p>
                <p class="target">Pouvez toujours courir !</p>
                <p class="target">Tel est owned qui croyant owner !</p>
                <p class="target">Moi, j'm'en fous…</p>

*/