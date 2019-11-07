/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  // your code here

  document.getElementById("run").addEventListener("click", function() {
    dob_day = document.getElementById("dob-day").value;
    console.log(dob_day);
    dob_month = document.getElementById("dob-month").value;
    console.log(dob_month);
    dob_year = document.getElementById("dob-year").value;
    console.log(dob_year);

    date_now = new Date();
    console.log(date_now);
    date_now_year = date_now.getFullYear();
    console.log(date_now_year);
    // opgelet: month is zero indexed!
    date_now_month = date_now.getMonth() + 1;
    console.log(date_now_month);
    /* getDay is voor dag van de week dus verkeerd 
    date_now_day = date_now.getDay();
    console.log(date_now_day);
    */
    date_now_day = date_now.getDate();
    console.log(date_now_day);

    age_year = date_now_year - dob_year;
    console.log(age_year);

    if (date_now_month >= dob_month) {

        if (date_now_month == dob_month) {
            if (date_now_day >= dob_day) {
                console.log(`het is na de maand van geboorte of gelijk eraan dus jaar mag getoond worden, zijne ${age_year}`);
            }
            else {
                console.log("onvoldoende daagjes");
            }
        }
        else {
            console.log(`het is na de maand van geboorte of gelijk eraan dus jaar mag getoond worden, zijne ${age_year}`);
        }
    }
    else {
        console.log(`nog eventjes wachten en dan ben je ${age_year}`);
    }
  });
})();

//     On the click to the button, get the birthdate of the visitor and display his/her age.
