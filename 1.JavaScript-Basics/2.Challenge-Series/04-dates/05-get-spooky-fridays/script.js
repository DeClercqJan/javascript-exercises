/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  document.getElementById("run").addEventListener("click", function() {
    // console.log("test knop");
    let year_entered = document.getElementById("year").value;
    // console.log(year_entered);
    let date_year_entered = new Date(`01/01/${year_entered}`);
    // console.log(date_year_entered);

    var start = new Date(date_year_entered);
    // console.log(start);
    // opletten met de notatie van datums
    // var end = new Date(`12/31/${year_entered}`);
    var end = new Date(`01/01/${year_entered}`);
    end.setFullYear(start.getFullYear() + 1);
    // console.log(end);
    year_array = [];
    // console.log(year_array);
    while (start < end) {
      // console.log(start);
      start = new Date(start.setDate(start.getDate() + 1));
      year_array.push(start);
    }
    // console.log(year_array);
    year_array.forEach(function(element) {
      // console.log(element);
      // console.log(element.getDay());
      element_weekday = element.getDay();
      switch (element_weekday) {
        case 1:
          element_weekday = "Monday";
          break;
        case 2:
          element_weekday = "Tuesday";
          break;
        case 3:
          element_weekday = "Wednesday";
          break;
        case 4:
          element_weekday = "Thursday";
          break;
        case 5:
          element_weekday = "Friday";
          break;
        case 6:
          element_weekday = "Saturday";
          break;
        case 7:
          element_weekday = "Sunday";
          break;
      }
      // console.log(element_weekday);
      element_day = element.getDate();
      // console.log(element_day);
      if (element_weekday == "Friday" && element_day == 13) {
        // console.log(`${element} is een ${element_weekday} de ${element_day}`);
        alert(`${element} is een ${element_weekday} de ${element_day}`);
        // TO DO: VOOR SCHRIKKELJAREN MEERDERE LIJNTJES TEXT IN DE ALERT-MESSAGE KRIJGEN
      }
    });
    /*
while (start < end) {
    console.log(start);
    var year_array = [];
    year_array.push(start);
    start = new Date(start.setDate(start.getDate() + 1));
}
*/
  });

  /* gepikt van deze hieronder en wat aangepast
var start = new Date("01/05/2017");
var end = new Date("06/30/2017");
var newend = end.setDate(end.getDate()+1);
var end = new Date(newend);
while(start < end){
   console.log(new Date(start).getTime() / 1000); // unix timestamp format
   console.log(start); // ISO Date format          
   var newDate = start.setDate(start.getDate() + 1);
   start = new Date(newDate);
}
*/
  // your code here
})();

//

// When you click the button, display each month of the specified year that has a Friday 13th.
