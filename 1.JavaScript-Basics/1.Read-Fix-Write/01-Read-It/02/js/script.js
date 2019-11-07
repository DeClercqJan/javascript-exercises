const amount = 20;

document.write("<h1>Top " + amount + " Greatest Movies of All Time</h1>");

document.write(`<h2>The first ${amount / 2} movies</h2>`);

var person = 'Mike';
var age = 28;

function myTag(strings, personExp, ageExp) {
  var str0 = strings[0]; // "That "
  var str1 = strings[1]; // " is a "

  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (""), so disregard.
  // var str2 = strings[2];

  var ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // We can even return a string built using a template literal
  // return `${str0}${personExp}${str1}${ageStr}`;
  return `${str0}${ageStr}${str1}${personExp}`;
}

var output = myTag`That ${ person } is a ${ age }`;

console.log(output);
// That Mike is a youngster