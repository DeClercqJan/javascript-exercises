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

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

// deze om te checken wat de map-functie doet
const mapVariabele = movies.map(movie => movie);
console.log(mapVariabele)

const lowerCaseMovies = movies.map(movie => movie.toLowerCase());

document.write(`<ol>`);
lowerCaseMovies.forEach(movie => document.write(wrapWithTag(movie, `li`)));
document.write(`</ol>`);
