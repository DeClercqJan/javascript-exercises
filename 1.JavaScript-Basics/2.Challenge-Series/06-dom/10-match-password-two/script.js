/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  // your code here

  document.getElementById("run").addEventListener("click", function() {
    password_one = document.getElementById("pass-one").value;
    password_two = document.getElementById("pass-two").value;
    if (password_one === password_two) {
      alert("the two passwords are identical");
    } else {
      document.getElementById("pass-one").className = "error";
      document.getElementById("pass-two").className = "error";
    }
  });
})();

/*
When you click the button, check whether the two passwords entered in the input fields are
<em>exactly</em>the same. If they are not, add the class "error" to the input boxes.</p>

            <section class="material">
                <form action="#" method="post">
                    <div class="field">
                        <label for="pass-one">Password:</label>
                        <input type="text" name="pass-one" id="pass-one" />
                    </div>
                    <div class="field">
                        <label for="pass-two">Re-enter password:</label>
                        <input type="text" name="pass-two" id="pass-two" />
                    </div>
                    <div class="actions">
                        <button type="button" id="run">Run the script</button>

*/
