/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  // your code here
  // CHANGE WAS ONVOLDOENDE ALS EVENT; HET MOET INPUT ZIJN
  document.getElementById("pass-one").addEventListener("input", function() {
    // console.log("event listerener werkt");
    password_one = document.getElementById("pass-one").value;
    // console.log(password_one.length);
    password_array = password_one.split('');
    password_numbers_array = [];
    for (key in password_array) {
        // console.log(key);
        // console.log(password_array[key]);
        if (isNaN(password_array[key])) {
        //    console.log("element is geen nummer (met isNAN)");
        }
        else {
        //    console.log("element is een nummber");
            password_numbers_array.push(password_array[key]);
        }
    }
    
    // console.log(password_numbers_array);
    // console.log(password_numbers_array.length);
    // console.log(password_array);
    if (password_one.length >= 8 && password_numbers_array.length >= 2) {
        document.getElementById("validity").innerHTML = "ok";
    }
    else {
        document.getElementById("validity").innerHTML = "not ok";
    }

    /*
    // GEEN WHILE GEBRUIKEN, WANT DAN BEGINT HIJ TE LOPEN TOT ONEINDIG
    if (password_one.length <= 10) {
      console.log("nog geen 10 karakters bereikt.");
      for (i = 0; i < password_one.length; i++) {
          i = password_one.length;
      }
    } else {
      alert("je mag geen karakters meer typen");
      */
  });

})();

/*
 <p>Listen for changes in the input field and display "ok" in the validity span if the input is at least
                    8 characters long and contains at least two numbers.</p>
            </section>
            <section class="material">
                <form action="#" method="post">
                    <div class="field with-indicator">
                        <label for="pass-one">Password:</label>
                        <input type="text" name="pass-one" id="pass-one" />
                        <span id="validity" class="indicator">Not ok</span>

*/