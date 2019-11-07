/* The for-loop is no longer present. 
What was it replaced with? How does this work?
* What does the function 'parseTitle' do? 
  What parameter do we pass to this function?
* What does the function 'wrapWithTag' do? 
  Why are the parameters placed between brackets?
*/

const movies = [
  `The Godfather`,
  `The Shawshank Redemption`,
  `Schindler's List`,
  `Raging Bull`,
  `Casablanca`,
  `Citizen Kane`,
  `Gone with the Wind`,
  `The Wizard of Oz`,
  `One Flew Over the Cuckoo's Nest`,
  `Lawrence of Arabia`,
];

// creeert iets (een tag?) die dan bevolkt worden door de parameters. Je kan de inhoud meegeven en tussen wat voor html-tag het moet staan
const wrapWithTag = (content, tagname) => {
  return `<${tagname}>${content}</${tagname}>`;
};

// de titel zal eerst naar lowercase worden omgezet. Die variabele gaat dan in de tag van daarnet en die gaan we dan uitschrijven (indien ParseTitle wordt aangeroepen)
const parseTitle = title => {
  const lowerTitle = title.toLowerCase();
  const wrapped = wrapWithTag(lowerTitle, `li`);
  document.write(wrapped);
};

// een functie die in de plaats van een foreach-lus elk element van de array movies eerst movie gaat noemen en dan de parsetitle aanroept
document.write(`<ol>`);
movies.forEach(movie => parseTitle(movie));
document.write(`</ol>`);