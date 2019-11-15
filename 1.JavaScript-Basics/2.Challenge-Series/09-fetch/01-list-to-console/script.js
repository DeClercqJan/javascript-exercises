/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

// PROBLEMEN OM SERVER OP TE ZETTEN
// JEROEN HEEFT HET MET FETCH OPGELOST (ZONDER INSTALLATIE VAN SERVER)
// JEROEN: HET IS ASYNC: JE HEBT EEN DERGELIJKE FUNCTIE NODIG
// JEROEN HEEFT BTW OOK EEN PLUGIN ASYNCH GEINSTALLEERD
// OPGELET: MOGEN GEEN PUNTKOMMA'S INSTAAN!
/*
async function test() {
    await fetch("../../_shared/api.json")
    .then(ste => ste.json())
    .then(result => {
        console.log(result)
        console.log(result.heroes)
    })
}
document.getElementById("run").addEventListener("click",test)
*/

// MET LOKALE SERVER
async function test() {
    await fetch("http://localhost:3000/heroes")
    .then(ste => ste.json())
    .then(result => {
        console.log(result)
    })
}
document.getElementById("run").addEventListener("click",test)
    /*
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
           document.getElementById("demo").innerHTML = this.responseText;
          }
        };
        xhttp.open("GET", "ajax_info.txt", true);
        xhttp.send();
      }
      */
})();

/*
edit: check readme.md bij hele groep oefeningen. daar staat wat in van nodejs en seve

        <div class="content">
            <section class="explain">
                <p>Once the REST API of the exercise has been launched you can access it at the same domainname:port that your server resides on. This small API follows the REST precepts, and contains, under the /heroes path, data about X-Men. When you click on the
                    button, use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">fetch function</a> and following the REST architecture, retrieve the list of X-Men and display it in the console.</p>

                <p>The technique to fetch data from the server with JavaScript is commonly called <a href="https://www.w3schools.com/js/js_ajax_intro.asp">Ajax</a>. While there are different syntaxes to make the call, the general theory stays the same.</p>
                <p>The most modern approach without using a framework is the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">fetch function</a>, I recommend using it.</p>
            </section>

            */
