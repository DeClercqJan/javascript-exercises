/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    time_now = new Date();
    console.log(time_now);
    time_now_hours = time_now.getHours();
    time_now_hours = 5;
    console.log(time_now_hours);
    if (time_now_hours < 18 && time_now_hours <= 5) {
        console.log("hello");
        document.getElementById("target").innerHTML = "hello";
    }
    else {
        console.log("good evening");
        document.getElementById("target").innerHTML = "good evening";

    }
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();

// change the content of the tag by Hello (if it's before 18h), or by Good evening.
