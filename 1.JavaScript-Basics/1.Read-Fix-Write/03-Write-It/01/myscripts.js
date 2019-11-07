/*
* Make an array with all movies currently playing in Studio Skoop http://www.studioskoop.be/overzicht_films
* Display the movies in an ul list.
*/

movies = ["Hors normes", "The Mustang", "Joker"]; //kzal ze niet al doen hé

document.write(`<ol>`)
movies.forEach(function(element) {
    console.log(element);
    document.write(`<li>${element}</li>`)
});
document.write(`</ol>`)

