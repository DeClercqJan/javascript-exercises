const tvshows = [
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

const wrapWithTag = (content, tagname) => {
  return `<${tagname}>${content}</${tagname}>`;
};

/* 
document.write(`<ol>`);
show.forEach(tvshows => document.write(wrapWithTag(show, `li`)));
document.write(`</ol>`);
*/

/*
document.write(`<ol>`);
tvshows.forEach(function(show) {
  wrapWithTag(show, `li`);
  console.log(show);
  document.write(show);
});
document.write(`</ol>`);
*/

// van andere oefening gekopieerd en aangepast
/*const parseTitle = title => {
  const wrapped = wrapWithTag(title, `li`);
  document.write(wrapped);
};
*/

document.write(`<ol>`);
// tvshows.forEach(show => parseTitle(show));
tvshows.forEach(show => document.write(wrapWithTag(show,`li`)));
document.write(`</ol>`);








