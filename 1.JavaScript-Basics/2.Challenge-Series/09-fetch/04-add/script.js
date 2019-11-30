/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", add_hero);

  function add_hero() {
    hero_name = document.getElementById("hero-name").value;
    hero_alter_ego = document.getElementById("hero-alter-ego").value;
    hero_powers = document.getElementById("hero-powers").value;
    console.log(hero_name);
    console.log(hero_alter_ego);
    console.log(hero_powers);

    // post body data
    const new_hero = {
        id: 0, // zal worden bijgeteld
      name: hero_name,
      alterEgo: hero_alter_ego,
      abilities: [
        hero_powers
    ]
    };

    console.log(new_hero);

    const url = "http://localhost:3000/heroes";

    // request options
    const options = {
      method: "POST",
      body: JSON.stringify(new_hero),
      headers: {
        "Content-Type": "application/json"
      }
    };

    // send POST request
    fetch(url, options)
      .then(res => res.json())
      .then(res => console.log(res));
  }
  // your code here
})();

/*

  <section class="explain">
                <p>When you click on the button, retrieve the values of the form and create the new hero in the API.
                    <br />Each field must be filled in (it is up to you to manage). </p>
                <p>Display the result of all your heroes in the console. </p>
                <p><strong>Caution: </strong> powers must be stored in the same format as the previous heroes!</p>
                <p>You do not have to update the JSON file, it is oké that when you refresh the page you lose the newly added heroes.</p>
            </section>
            <section class="material">
                <form action="#" method="post">
                    <div class="field dob">
                        <label for="hero-name">Name:</label>
                        <input type="text" name="name" id="hero-name" />
                    </div>
                    <div class="field dob">
                        <label for="hero-alter-ego">Alter-Ego:</label>
                        <input type="text" name="alter-ego" id="hero-alter-ego" />
                    </div>
                    <div class="field dob">
                        <label for="hero-powers">Power:</label>
                        <input type="text" name="powers" id="hero-powers" />
                    </div>
                    <div class="actions">
                        <button type="button" id="run">Run the script</button>
                    </div>
                </form>

                */
