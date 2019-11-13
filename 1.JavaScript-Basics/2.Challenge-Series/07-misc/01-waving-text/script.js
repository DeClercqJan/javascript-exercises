/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  /*
  // HIERONDER DE OPLOSSING VAN SANDER -> NOG EENS BETER TE BEKIJKEN OM TE BEGRIJPEN EN EVENTUEEL MIJN EIGEN CODE NOG AAN TE PASSEN
  //const maxFontsizeAddition = 100;
  const minFontSizePixels = 12;
  // const fontSizeSteps = (wordcount, maxFontsizeAddition) => maxFontsizeAddition/wordcount;
  const highRes = true;
  const separator = highRes ? "" : " ";

  const textElement = document.getElementById("target");

  let textArr = textElement.innerText.split(separator);

  let shift = 0;

  setInterval(() => {
    textElement.innerHTML = textArr
      .map((word, index) => {
        if (++shift >= textArr.length / 2) {
          shift = 0;
        }
        return `
             <span style="font-size:${shift +
               minFontSizePixels}px">${word}</span>
             `;
      })
      .join(separator);
  }, 100);
  */

  // EERSTE POGING, BENADERT HET RESULTAAT, MAAR IS NIET GOED
  // your code here
  // document.getElementById("target").style.fontSize = "5em";

  text = document.getElementById("target").innerHTML;

  var varCounter = 0;

  var varName = function() {
    if (varCounter <= 3) {
      varCounter++;
      console.log(varCounter);
      letters = text.split("");
      letters_changed = letters.map(function(letter) {
        letter_changed = `<span style='font-size:${varCounter}em;'>${letter}</span>`;
        return letter_changed;
      });
      text_changed = letters_changed.join("");
      document.getElementById("target").innerHTML = text_changed;
    } else {
      clearInterval(intervalId);
      document.getElementById("target").innerHTML = text;
    }
  };

  intervalId = setInterval(varName, 500);
  intervalId;

  /*
  setTimeout(function() {
    for (i = 0; i < text.length; i++) {
      // console.log(text[i]);
      letter_appended = text.replace(
        text[i],
        `<span style='font-size:5em;'>${text[i]}</span>`
      );
      console.log(letter_appended);
      document.getElementById("target").innerHTML = letter_appended;
    }
  }, 1000);
*/

  // console.log(text);
  // console.log(typeof text);
  // console.log(text.charAt(4));
  /* DIT WERKT VOOR DE HELE TEKST, MAAR GAAT NIET 1 VOOR 1 
  text_appended = "";
  setTimeout(append_text, 2000);
  function append_text() {
    console.log("test");
    for (i = 0; i < text.length; i++) {
      // console.log(i);
      // console.log(text[i]);
      text_appended += `<span style='font-size:5em;'>${text[i]}</span>`;
      document.getElementById("target").innerHTML = text_appended;
    }
  }
      */
})();

/*

            <section class="explain">
                <p>Display some text inside the target element. Create a wave effect using at least 5 different font
                    sizes.</p>
            </section>
            <section class="material">
                <p id="target">Woo-hoo! I'm making waves! Wéééé! Oh ... I think I'm having seasickness ...</p>
            </section>

*/
