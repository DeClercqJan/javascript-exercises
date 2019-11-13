/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  // your code here
  text = document.getElementById("target").innerHTML;
  document.getElementById("target").innerHTML = "";
  // console.log(text);
  characters = text.split("");
  // console.log(characters);
  // console.log(typeof characters);
  characters_length = characters.length;
  // console.log(characters_length);
  counter = 0;
  // stuk hieronder werkt in console, maar ik krijg er de delay niet op

  typed_array = [];
  typed_string = [];
  for (i = 0; i < characters.length; i++) {
    console.log(characters[i]);
    /*
    typed_array.push(characters[i]);
    console.log(typed_array);
    typed_string = typed_array.join("");
    console.log(typed_string);*/
        document.getElementById("target").innerHTML += characters[i];
  }

})();

/*
      <p>Display some text inside the target element. Create a "typewriter" effect by making each letter
                    appear one after the other. Use a random delay between each letter appearing.</p>
            </section>
            <section class="material">
                <p id="target">Je suis un texte qui va apparaître dans un effet "machine à écrire", un peu comme dans
                    les films noirs. Sauf que... je ne sais pas qui est l'assassin ! Y en a-t-il vraiment un ?
                    Habite-t-il au 21 ? Que de mystères !</p>


*/
