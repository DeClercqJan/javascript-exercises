/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", function() {
    // SIMPELERE OPLOSSING, UIT VERBETERING GEHAALD
    // window.lib.getPosts()
    //  .then(result => console.log(result));

    // MIJN OPLOSSING, MET EXPLICIET GEBRUIK VAN RESOLVE, MAAR BEGRIJP NIET GOED WAT MAG EN NIET MAG
    // => SYNTAX VERDER BESTUDEREN
    console.log("test");
    new Promise(function(resolve, reject) {
      articles = window.lib.getPosts();
      resolve(articles);
    }).then(function(resolve) {
      console.log(resolve);
    });
  });
})();

/*<strong>Get posts with a Promise</strong>
</h2>
</header>
<div class="content">
 <section class="explain">
 <p>The function window.lib.getPosts() is available in the script. It returns a Promise that will be resolved, after a short delay, with a list of articles.
 When you click on the button, call the getPosts function and display the items obtained in the console (the getPosts function will always be resolved without error).</p>
 </section>
<section class="material">
<div class="actions">
<button type="button" id="run">run the script</button>
</div>
*/
