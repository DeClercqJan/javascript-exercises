/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let date = new Date();
    // console.log(date);
    date_hours = date.getHours();
    // console.log(date_hours);
    date_minutes = date.getMinutes();
    // console.log(date_minutes);
    let date_day = date.getDate();
    // console.log(date_day);
    let date_month = date.getMonth() + 1;
    // console.log(date_month);
    switch (date_month) {
        // opgelet! in switches voert hij alles uit vanaf het punt dat je je case tegenkomt. Daarom moet je break gebruiken
        case 1: date_month = "January";
        break;
        case 2: date_month = "February";
        break;
        case 3: date_month = "March";
        break;
        case 4: date_month = "April";
        break;
        case 5: date_month = "May";
        break;
        case 6: date_month = "June";
        break;
        case 7: date_month = "July";
        break;
        case 8: date_month = "August";        
        break;
        case 9: date_month = "September";
        break;
        case 10: date_month = "October";
        break;
        case 11: date_month = "November";
        break;
        case 12: date_month = "December";
        break;
    }
    // console.log(date_month);
    let date_year = date.getFullYear();
    // console.log(date_year);
    let date_weekday = date.getDay();
    // console.log(date_weekday);
    switch (date_weekday) {
        case 1: date_weekday = "Monday";
        break;
        case 2: date_weekday = "Tuesday";
        break;
        case 3: date_weekday = "Wednesday";
        break;
        case 4: date_weekday = "Thursday";
        break;
        case 5: date_weekday = "Friday";
        break;
        case 6: date_weekday = "Saturday";
        break;
        case 7: date_weekday = "Sunday";
        break;

    }
    // console.log(date_weekday);

    document.getElementById("target").innerHTML = `${date_weekday} ${date_day} ${date_month} ${date_year}, ${date_hours}h${date_minutes}`;
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();
