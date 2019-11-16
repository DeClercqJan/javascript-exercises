/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

    // er zal nog iets met innerHTML moeten gebeuren. edit: nee: document fragment kan je wel wat mee doen
  // zo wat met DOM en nodes spelen, geloof ik

  template = document.getElementById("tpl-hero");
  template_html = document.getElementById("tpl-hero").innerHTML;
  // console.log(template);
  console.log(template_html);
  // VERANDER ENKEL ORIGINELE
  /*
  template_content = template.content;
  console.log(template_content);
  var li = template_content.querySelectorAll("li");
  console.log(li);
  li[0].textContent = "test123";
  // td[1].textContent = "Stuff";
  */
  target = document.getElementById("target");
  //  target.appendChild(template_content);

  /*
  // SEBIET HETZELFDE DOEN MAAR MET MEERDERE CLONES. UITEINDELIJK VERZET BINNEN FUNCTIE CHANGE
  var clone = document.importNode(template.content, true);
  var li = clone.querySelectorAll("li");
  li[0].textContent = "test clone 1";

  target.appendChild(clone);

  // Clone the new row and insert it into the table
  var clone2 = document.importNode(template.content, true);
  li = clone2.querySelectorAll("li");
  li[0].textContent = "test clone 2";

  target.appendChild(clone2);
*/

  async function change() {
    await fetch("http://localhost:3000/heroes")
      .then(ste => ste.json())
      .then(result => {
        console.log(result);
        x_men = result;
        // DEZE WERKEN NIET OMDAT JE NIET VAN ARRAY PAKT, MAAR VAN JSONBESTAND
        // console.log(result.name)
        // console.log(result.alterEgo)
        // console.log(result.abilities)
        console.log(x_men);
        x_men.forEach(element => {
          // console.log(element);
          x_name = element.name;
          // console.log(element.name);
          x_alterEgo = element.alterEgo;
          // console.log(element.alterEgo);
          x_abilities = element.abilitites;
          // console.log(element.abilities);
          clone = document.importNode(template.content, true);
          // var li = clone.querySelectorAll("li");
          // li[0].textContent = "test clone";
          name_class = clone.querySelector(".name");
          name_class.textContent = x_name;
          alter_ego_class = clone.querySelector(".alter-ego");
          alter_ego_class.textContent = x_alterEgo;
          powers_class = clone.querySelector(".powers");

          element.abilities.forEach(element => {
            console.log(element);
          });
          // NIET MOOISTE OPLOSSING, WANT RESPECTEERT TEMPLATE, MAAR ZOU NOG WAT KUNNEN MOOIER PRESENTEREN, CSS AANPASSEN? MSS NOG NODE BIJMAKEN VOOR PARAGRAAF
          x_abilities_string = element.abilities.join(" + ");
          powers_class.textContent = x_abilities_string;

          target.appendChild(clone);
        });
      });
  }
  document.getElementById("run").addEventListener("click", change);

})();

/*

<p>When you click on the button, use the fetch function, retrieve the list of X-Men and display it in the tag whose id is "target". Use the template tag to reproduce an html structure for each hero.</p>
<p>The template tag already exists in the HTML structure, be sure to check the HTML code!</p>
</section>
            <section class="material">
                <div class="actions">
                    <button type="button" id="run">Run the script</button>
                </div>
                <template id="tpl-hero">
                        <li class="hero">
                            <h4 class="title">
                                <strong class="name"></strong>
                                <em class="alter-ego"></em>
                            </h4>
                            <p class="powers"></p>
                        </li>
                    </template>
                <ol id="target"></ol>I

*/
