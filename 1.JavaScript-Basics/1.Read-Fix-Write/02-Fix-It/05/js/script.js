const shows = [
  `legion`,
  `sneaky pete`,
  `santa clarita diet`,
  `riverdale`,
  `the young pope`,
  `a series of unfortunate events`,
  `taboo`,
  `colony`,
  `24: legacy`,
  `speechless`,
  `scherlock`,
  `stranger things`,
  `this is us`,
  `timeless`,
  `the oa`,
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

const writeTitle = title => {
  const newTitle = uCFirst(title);
  console.log(newTitle);
  document.write(wrapWithTag(newTitle, `li`));
};

const uCFirst = sentence => {
  // console.log(sentence) 
  const words = sentence.split(` `); // had spatie nodig in sepeartor
  // console.log(words);
  // danny zegt voor hieronder: de oplossing is gewoon 1 zetten; anders vond ik het goed gevonden om word.length te gebruiken
  const words2 = words.map(word => word.charAt(0).toUpperCase() + word.slice(1, 99)); // andere varaibele gemaakt, word slice meegegeven vanaf wanneer tot wanneer
  // console.log(words2);
  return words2.join();
};

document.write(`<ol>`);
shows.forEach(show => writeTitle(show));
document.write(`</ol>`);

/*
# FIX IT
## EX 05
In this exercise we want every word in a title to start with a capital letter.
* Look at the error message in the dev tools and fix it.
* Look at the documentation of split().
* Look at the documentation of charAt().
* Look at the documentation of slice().
* Adjust the function to get the desired result
*/