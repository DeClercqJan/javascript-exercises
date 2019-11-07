/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

  // your code here

  time_now = new Date();
  console.log(time_now);
  time_now_hours = time_now.getHours();
  time_now_minutes = time_now.getMinutes();
  time_now_hours = 17;
  time_now_minutes = 30;
  console.log(time_now_hours);
  console.log(time_now_minutes);
  if (time_now_hours < 17 && time_now_hours >= 5) {
    console.log("tis sowieso HELLO, want uren zijn goed");
  } else if (time_now_hours >= 17 || time_now_hours < 5) {
    console.log("nu nog checken of de minuten goed zijn");
    if (time_now_hours >= 17 && time_now_minutes < 30) {
      console.log("de minuten zijn niet juist om het over EVENING TE HEBBEN");
    } else {
      console.log("tis evening");
    }
  }
})();

// Change the content of the tag by Hello (if it's before 17h30), or by Good evening.
