/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  // your code here
  document.getElementById("pass-one").setAttribute("maxlength", "10");
  // CHANGE WAS ONVOLDOENDE ALS EVENT; HET MOET INPUT ZIJN
  document.getElementById("pass-one").addEventListener("input", function() {
    // console.log("event listerener werkt");
    password_one = document.getElementById("pass-one").value;
    //console.log(password_one);
    // console.log(password_one.length);
    // GEEN WHILE GEBRUIKEN, WANT DAN BEGINT HIJ TE LOPEN TOT ONEINDIG
    if (password_one.length <= 10) {
      console.log("nog geen 10 karakters bereikt.");
      for (i = 0; i < password_one.length; i++) {
          i = password_one.length;
      document.getElementById("counter").innerHTML = i;
      }
    } else {
      alert("je mag geen karakters meer typen");
    }
  });
})();

/*
<p>Listen for changes in the input field and display the number of characters entered in the counter
                    span. As soon as 10 characters have been entered, don't allow any more characters to be typed.</p>
            </section>
            <section class="material">
                <form action="#" method="post">
                    <div class="field with-indicator">
                        <label for="pass-one">Password:</label>
                        <input type="text" name="pass-one" id="pass-one" />
                        <span id="counter" class="indicator">0/10</span>

*/
