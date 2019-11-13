/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function test() {
  return true;
}

(function() {
  // console.log(document.getElementsByClassName("operator"));
  // OPGELET ARRAY FROM WORDT NIET ONDERSTEUND DOOR INTERNET EXPLORER
  console.log(Array.from(document.getElementsByClassName("operator")));

  operand_one = parseInt(document.getElementById("op-one").value);
  
  operand_two = parseInt(document.getElementById("op-two").value);

  operators = Array.from(document.getElementsByClassName("operator"));
  operators.forEach(element => {
  //  console.log(element);
    element.addEventListener("click", function() {
    //  console.log(element.id);
      operator_id = element.id;
     // console.log(operator_id);
      switch (operator_id) {
        case "addition": console.log(`The result of the ${operator_id} is ${operand_one+operand_two}`);
        break;
        case "substraction": console.log(`The result of the ${operator_id} is ${operand_one-operand_two}`);
        break;
        case "multiplication": console.log(`The result of the ${operator_id} is ${operand_one*operand_two}`);
        break;
        case "division": console.log(`The result of the ${operator_id} is ${operand_one/operand_two}`);
        break;
      }
    });

  });
  return true;
})();

// Complete the script to make the calculator work. To do it use the switch. edit: hoe moet ik dit aanpakken? mss best iemand vragen om me op weg te helpen
// edit: mijn switch is eigenlijk gewoon de vraag of het addition dan wel iets anders is.
