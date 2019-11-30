/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  fetch(`http://localhost:3000/heroes/`)
    .then(response => response.json())
    .then(json => console.log(json));

  document.getElementById("run").addEventListener("click", delete_hero);

  function delete_hero() {
    hero_id = document.getElementById("hero-id").value;
    console.log(hero_id);

    // met deze functie het wat anders aangepakt door in de url te werken. Maar het lukt me niet om er NADIEN een then en console.log van te maken. pas met het herladen van de pagina en auto uitvoeren van een andere fetch functie lukt het om de nieuwe array in de console weer te geve n 
    fetch(`http://localhost:3000/heroes/${hero_id}`, {
      method: "DELETE"
    });

    // your code here
  }
})();

/*
<section class="explain">
                <p>When you click on the button, get the id from the form, then delete the corresponding X-Men in the API and display the result of your query in the console. </p>
                <p>You do not have to update the JSON file, it is oké that when you refresh the page you lose the newly added heroes.</p>
            </section>
            <section class="material">
                <form action="#" method="post">
                    <div class="field">
                        <label for="hero-id">Id of the hero:</label>
                        <input type="text" name="hero-id" id="hero-id" />
                    </div>
                    <div class="actions">
                        <button type="button" id="run">Run the script</button>
                    </div>
                </form>
*/
