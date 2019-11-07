/* becode/javascript
 *
 * /05-arrays/05-walk-three/script.js - 5.5: parcours de tableau (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  var people = [
    {
      firstname: "Garald",
      lastname: "Freschi",
      email: "gfreschi0@discuz.net"
    },
    {
      firstname: "Bendicty",
      lastname: "Foster-Smith",
      email: "bfostersmith1@mysql.com"
    },
    {
      firstname: "Michelle",
      lastname: "Draude",
      email: "mdraude2@csmonitor.com"
    },
    {
      firstname: "Cathee",
      lastname: "Meineck",
      email: "cmeineck3@t-online.de"
    },
    {
      firstname: "Marianna",
      lastname: "Coal",
      email: "mcoal4@creativecommons.org"
    }
  ];

  // your code here
  document.getElementById("run").addEventListener("click", function() {
    /*
    console.log(people);
    console.log(people[3]);
    console.log(people[3].firstname);
    */
    people.forEach(person => {
      console.log(person.firstname);
    });
  });
})();

/*
When you click the button, display on the console, one after the other,
the name of each person in the array <strong>people</strong>. Use the <em>forEach method</em>.</p>
*/
