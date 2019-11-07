const shows = [
  {
    title: `legion`,
    season: 1,
    score: 94,
  }, {
    title: `sneaky pete`,
    season: 1,
    score: 100,
  }, {
    title: `santa clarita diet`,
    season: 1,
    score: 71,
  }, {
    title: `riverdale`,
    season: 1,
    score: 87,
  }, {
    title: `the young pope`,
    season: 1,
    score: 74,
  }, {
    title: `a series of unfortunate events`,
    season: 1,
    score: 90,
  }, {
    title: `taboo`,
    season: 1,
    score: 78,
  }, {
    title: `colony`,
    season: 2,
    score: 100,
  }, {
    title: `24: legacy`,
    season: 1,
    score: 57,
  }, {
    title: `speechless`,
    season: 1,
    score: 98,
  }, {
    title: `scherlock`,
    season: 4,
    score: 65,
  }, {
    title: `stranger things`,
    season: 1,
    score: 95,
  }, {
    title: `this is us`,
    season: 1,
    score: 89,
  }, {
    title: `timeless`,
    season: 1,
    score: 84,
  }, {
    title: `the oa`,
    season: 1,
    score: 73,
  },
];

/* VORIGE POGING 
const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

// const topScoreFilter = show => { };
function topScoreFilter(value) {
  console.log(value);
  console.log(value.score);
  return value.score > 90;
};

shows.filter(topScoreFilter);

document.write(`<ol>`);
shows.forEach(show => document.write(wrapWithTag((show.title + " " + show.score), `li`)));
document.write(`</ol>`);
*/

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

/* EDIT 2: de oplossing met else en if gebruikt de klaarstaande functies niet
const topScoreFilter = show => { };

shows.filter(topScoreFilter);
 */

// EDIT 2: OPLOSSING MET IF/ELSE
/*
document.write(`<ol>`);
shows.forEach(function(shows) {
  if (shows.score >= 90) {
    document.write(wrapWithTag(shows.title + " (" + shows.score + "%)", `li`))
  }
  else {
console.log(`De film ${shows.title} heeft niet meer of gelijk aan 90% gekregen, maar ${shows.score}`)
  };
});
document.write(`</ol>`);
*/

// edit3: OPLOSSING ZOALS HET MOET https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const topScoreFilter = show => {
  console.log(show);
  console.log(show.score);
  return show.score >= 90;
 };

shows.filter(topScoreFilter);

document.write(`<ol>`);
shows.filter(topScoreFilter).forEach(show => document.write(wrapWithTag(show.title, `li`)));
document.write(`</ol>`);

/* 
* We only want to display the shows with a score of 90 or more. You can only make adjustments after line 65.
* Display the score next to the title. Use the following formatting: `colony (100%)`
EDIT: NIET GELUKT TE FILTEREN + OOK DIE COLONY VIND IK GELIJK NIET SNEL GENOEG TERUG. EDIT:
EDIT2: colony is een film. was dus voorbeeld in opgave/readme
*/

