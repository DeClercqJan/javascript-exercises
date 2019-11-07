/* # WRITE IT
## EX 03
* Show a list of the last 10 Oscar winners for best actor.
* Sort the list by the age of the winner (oldest first)
* What's the combined age of all Oscar winners. Log this to the console.z
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

  

//  winners.forEach(element => console.log(element.age));

winners.sort(function(a,b) {
    return b.age - a.age;
}
);

// console.log(winners);

document.write(`<ol>`);
winners.forEach(element => document.write(`<li>${element.actor}</li>`));
document.write(`</ol>`);

var sum = 0;
for (var i = 0; i < winners.length; i++) {
  console.log(winners);
  console.log(winners[i]);
  console.log(winners[i].age)
  sum += winners[i].age;
}
console.log(sum);