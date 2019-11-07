/*
* Continue with the list form the previous exercise
* Transform the text to lowercase
* Display the list in reversed order
*/

movies = ["Hors normes", "The Mustang", "Joker"]; //kzal ze niet al doen hé

movies.reverse();

document.write(`<ol>`)
movies.forEach(function(element) {
    console.log(element);
    const x = element.toLowerCase(); // moet precies in een variabele gestoken worden
    console.log(x);
    document.write(`<li>${element}</li>`)
});
document.write(`</ol>`)