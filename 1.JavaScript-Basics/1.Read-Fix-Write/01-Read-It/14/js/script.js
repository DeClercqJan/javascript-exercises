const theatres = [
  {
    number: 1,
    capacity: 250,
    occupied: 234,
  }, {
    number: 2,
    capacity: 250,
    occupied: 80,
  }, {
    number: 3,
    capacity: 150,
    occupied: 132,
  }, {
    number: 4,
    capacity: 100,
    occupied: 10,
  },
];

const calculateAvailable = theatre => {
  theatre.available = theatre.capacity -  theatre.occupied;
  return theatre;
};

console.log(`Theatres:`, theatres.length);
console.log(`Total capacity:`, theatres.reduce((total, theatre) => total + theatre.capacity, 0));
console.table(theatres.map(theatre => calculateAvailable(theatre)));

/*
# READ IT
## EX 14
* Look at the reduce() function and research how it works exactly. edit: trekt de hele tijd het getal rechts van het getal links af. dus meest linkse is startwaarde ... edit2: is gelijk toch wat complexer
* Notice the ', 0' in the reduce function. Inspect the result when you omit this. Explain the difference. edit: is een initialValue ofzo https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
* What are we doing with the object that's passed to 'calculateAvailable'? edit: we voegen een categorie toe, namelijk available
*/