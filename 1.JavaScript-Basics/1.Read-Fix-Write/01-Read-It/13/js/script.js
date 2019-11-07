const movies = [
  {
    title: `The Godfather`,
    year: 1972,
    director: `Francis Ford Coppola`,
  }, {
    title: `The Shawshank Redemption`,
    year: 1994,
    director: `Frank Darabont`,
  }, {
    title: `Schindler's List`,
    year: 1993,
    director: `Steven Spielberg`,
  }, {
    title: `Raging Bull`,
    year: 1980,
    director: `Martin Scorsese`,
  }, {
    title: `Casablanca`,
    year: 1942,
    director: `Michael Curtiz`,
  }, {
    title: `Citizen Kane`,
    year: 1941,
    director: `Orson Welles`,
  }, {
    title: `Gone with the Wind`,
    year: 1939,
    director: `Victor Fleming`,
  }, {
    title: `The Wizard of Oz`,
    year: 1939,
    director: `Victor Fleming`,
  }, {
    title: `One Flew Over the Cuckoo's Nest`,
    year: 1975,
    director: `Milos Forman`,
  }, {
    title: `Lawrence of Arabia`,
    year: 1962,
    director: `David Lean`,
  },
];

console.table(movies);

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

const parseMovieData = movie => {
  let result = ``;
  for (const prop in movie) {
    result += wrapWithTag(movie[prop], `p`);
  }
  return result;
};

const orderByYear = (a, b) => {
  return a.year - b.year;
};

const createList = movies => {
  return `<ul>${movies
    .sort(orderByYear)
    .map(movie => wrapWithTag(parseMovieData(movie), `li`))
    .join(``)
  }</ul>`;
};

document.write(createList(movies));
console.table(movies);

/*
# READ IT
## EX 13
* Examine the parseMovieData function. What has changed? Why aren't we using forEach here? 
* Look at the documentation of for...in
* Look at the documentation of the .sort(à function. Explain how it's applied here. Edit: het gebruikt de jaren en niet iets anders om te sorteren
* Notice the 2 console.table() functions. Go back to exercise 10 and console.log the movies array  before and after the createList function. What's the difference? Can you explain why there is a difference?
edit: hm, hij sorteert ze gelijk al vanzelf
*/