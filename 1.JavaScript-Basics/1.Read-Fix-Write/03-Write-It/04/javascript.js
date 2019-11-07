/* # WRITE IT
## EX 04
* Display the list of actors, only their last name, sorted alfabetically.
*/

// EDIT: vind niet hoe je tekstbestanden kan aanspreken, heb ze hier dan maar gezet:
// EDIT2: jasper heeft het gedaan met fetch, dan run, eval ...
// EDIT3: Thijs zegt: zullen we later zien. Bedoeling was om het te doen via kopiëren en plakken voor nu
const winners = [
    {
      actor: "Forest Whitaker",
      film: "The Last King of Scotland",
      age: 45
    }, {
      actor: "Daniel Day-Lewis",
      film: "There Will Be Blood",
      age: 50
    }, {
      actor: "Sean Penn",
      film: "Milk",
      age: 48
    }, {
      actor: "Jeff Bridges",
      film: "Crazy Heart",
      age: 60
    }, {
      actor: "Colin Firth",
      film: "The King's Speech",
      age: 50
    }, {
      actor: "Jean Dujardin",
      film: "The Artist",
      age: 39
    }, {
      actor: "Daniel Day-Lewis",
      film: "Lincoln",
      age: 55
    }, {
      actor: "Matthew McConaughey",
      film: "Dallas Buyers Club",
      age: 44
    }, {
      actor: "Eddie Redmayne",
      film: "The Theory of Everything",
      age: 33
    }, {
      actor: "Leonardo DiCaprio",
      film: "The Revenant",
      age: 41
    }
  ];

document.write(`<ol>`);
winners.forEach(function(winners) {
    console.log(winners);
    console.log(winners.actor);
    const x = winners.actor;
    y = x.split(" ");
    console.log(y[1]);
    z = y[1];
    document.write(`<li>${z}</li>`);
});
document.write(`</ol>`);
