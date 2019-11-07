// import { wrap } from "module";

/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  // your code here

  // HIERONDER ZOVEELSTE POGING, ME LATEN INSPIREREN DOOR SANDER (ZIE HIERONDER)
  // EERDER GEPROBEERD MET FOREACH EN MAP, MAAR ZONDER RESULTAAT
  // HET IS BETER, MAAR EEN ARRAY WORDT ALS UNDEFINED AANZIEN
  function wrapWithTag(content, tag) {
    console.log(`<${tag}>${content}</${tag}>`);
  }

  wrapWithTag("testje", "p");

  function generate_content() {
    generated_content = [];
    for (i = 1; i < 11; i++) {
      // console.log(i);
      multiplications = [];
      for (a = 1; a < 11; a++) {
        // console.log(`${a} is een log van binnensrtte forloop`);
        console.log(`${a}*${i}`);
        calculation = i * a;
        multiplications.push(wrapWithTag((`${a}*${i}=${calculation}`), "td")); 
      }
      console.log(multiplications);
      x = multiplications.join();
console.log(x);
      // x = wrapWithTag(y, "tr");
      // generated_content.push(x);
      console.log(generated_content);
    }
    return generated_content;
  }


  content = generate_content();

  table = wrapWithTag(content, "table");

  document.getElementById("target").innerHTML = table;
  /*
 // EDIT: HIERONDER DE OPLOSSING VAN SANDER

    const tableNode = document.createElement("table");
    // HEB JE DEZE WEL NODIG? const tableRow = document.createElement("tr");
    const table = target.appendChild(tableNode);
    
    for(rows = 0; rows < 10; rows++){
        let newRow = table.insertRow(); // WERKWIJZE: HIJ VERWIJST IN ZIJN LOOS STEED NAAR IETS DAT ERBUIEN STAAT
        console.log(rows);
        console.log(newRow);
        
        for(cell=0; cell < 10; cell++){
          console.log(cell);  
          let newCell = newRow.insertCell();
          console.log(newCell);
            let innerCell = (rows +1) * (cell +1) // AHA, HIER PAKT HIJ ZIJN EERDER VERKLAARDE ELEMENTEN OM MEE TE REKENEN
            // newCell.appendChild(document.createTextNode(innerCell));       // HM, INTERESSANT, TEXTNODE NODIG
        }
      }
    */
})();

/*

Inside the element with id "target", create an HTML table with 10 columns and 10 rows, containing the
tables of multiplication from 1 to 10.</p>
EDIT: tip van Sander voor als het mij niet lukt: insertrow();
*/
