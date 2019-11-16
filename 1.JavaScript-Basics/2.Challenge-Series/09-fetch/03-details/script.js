/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  async function getID() {
    id_entered = document.getElementById("hero-id").value;
    console.log(id_entered);
    await fetch("http://localhost:3000/heroes")
      // .then(response => console.log(response))
      .then(response => response.json())
      .then(result => {
        console.log(result);
        var template = document.querySelector("#tpl-hero");
        console.log(template.innerHTML);
        var template_node = document.importNode(template.content, true);
        template_name = template_node.querySelector(".name");
        template_alter_ego = template_node.querySelector(".alter-ego");
        template_powers = template_node.querySelector(".powers");

         result.forEach(element => {
          // console.log(element);
          // console.log(element.id);
          // console.log(element.name);
          console.log(element.alterEgo);
          // if (element.id == id_entered) {document.getElementById("target").innerHTML = element.name}
          if (element.id == id_entered) {
                                      template_name.textContent = element.name;
                                      template_alter_ego.textContent = element.alterEgo;
                                      console.log(element.abilities);
                                      element.abilities.forEach(element => {
                                          console.log(element);
                                      });
                                      element_abilities_string = element.abilities.join(" + ");
                                      template_powers.textContent = element_abilities_string;

          }
          else {
              template_name.textContent = "nu such hero exists";
          }
        });
        target = document.getElementById("target");
        target.appendChild(template_node);
      });
  }

  document.getElementById("run").addEventListener("click", getID);
})();

/*
            <section class="explain">
                <p>When you click on the button, get the id from the form, then get the corresponding X-Men from the API and display it in the tag whose id is "target". Use the tag <strong>template</strong> to reproduce a suitable html structure.</p>
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
                <template id="tpl-hero">
                        <li class="hero">
                            <h4 class="title">
                                <strong class="name"></strong>
                                <em class="alter-ego"></em>
                            </h4>
                            <p class="powers"></p>
                        </li>
                    </template>
                <ol id="target"></ol>
            </section>
*/
