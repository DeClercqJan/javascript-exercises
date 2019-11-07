const fees = [
  {
    price: 10.75,
    title: "Normaal tarief"
  }, {
    price: 9.75,
    title: "Kortingstarief"
  }, {
    price: 8.05,
    title: "Kinepolis Student Card"
  }
];

const extras = [
  {
    price : 2.00,
    title : "Supplement 3D"
  }, {
    price : 2.00,
    title : "Supplement Escape"
  }, {
    price : 3.00,
    title : "Supplement HFR 3D"
  }, {
    price : 0.75,
    title : "Supplement Film Lange Speelduur (>/=2u15)"
  }, {
    price : 2.50,
    title : "Supplement Cosy Zone"
  }, {
    price : 1.00,
    title : "Supplement Atmos"
  }
];

fees.forEach(function(fee) {
    document.write(`Het ${fee.title} kost ${fee.price} </br>`);
});

extras.forEach(function(extra) {
  document.write(`Het ${extra.title} kost ${extra.price} </br>`);
});

// to do: 1. in (of op een andere manier...?) in de functie voor fees ook de elementen van fees aanroepen
//        2. onderstaande functie gebruiken om een 3 willekeurige suppelementen bij elk van de standaardtarieven te zetten. 

var myArray = [
  "Apples",
  "Bananas",
  "Pears"
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
console.log(randomItem);
document.write(randomItem);

/* kging er eerst 1 array van maken, maar dat zal het niet zijn 
const producten =  fees.concat(extras);
console.log(producten);
edit: eens multidimensional array van maken
*/

var producten = [];
producten.push(fees);
producten.push(extras);
console.log(producten);

console.log(producten[1]);
console.log(producten[1][4]);

// edit: to do: vinden hoe specifieke elementen in multidimensional array selecteren. er is iets zoals een for ... in - loop ..?
producten.forEach(function(product) {
  console.log(product);
  document.write(`Het ${product.title} kost ${product.price} </br>`);
});

for (var product in producten) {
  console.log(product[0][1]);
  console.log(product[1][2]);
  };

/*
# WRITE IT
## Oefening 05
* Toon alle mogelijke tarieven. Telkens het basis-tarief en dan telkens in combinatie met één supplement.
* Geef de correct prijs weer.
*/

