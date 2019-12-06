/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  document.getElementById("run").addEventListener("click", function() {
    //console.log("test");
    new Promise(function(resolve, reject) {
      articles = window.lib.getPosts();
      resolve(articles);
    }).then(function(resolve) {
      console.log(resolve);
      articles_array = resolve;
      // articles_array_modified = [];
      articles_array.forEach(element => {
        // console.log(element);
        article_id = element.id;
        // console.log(article_id);
        new Promise(function(resolve, reject) {
          // return "test 2";
          // console.log(article_id);
          resolve(window.lib.getComments(article_id));
        })
          /* HEB IK DIE ARTICLES_ARRAY_MODIFIED WEL NODIG?
        .then(function(comments) {
            // console.log(comments)
            element.comments = comments;
            // console.log(element);
            articles_array_modified.push(element);
        })
        */
       // DIT VOLSTAAT BLIJKBAAR OM BOVENSTAANDE CONSOLE.LOG(RESOLVE) TE BEVOLKEN ...?
          .then(function(comments) {
            // console.log(comments)
            element.comments = comments;
            // console.log(element);
          });
      });
      //      console.log(articles_array_modified);
    });
  });
})();

/*
                <section class="explain">
                    <p>You must have noticed, in the previous exercise, that the articles received via the window.lib.getPosts function included an id property.</p>
                    <p>The function window.lib.getComments() is available in the script. It must receive an article id as a parameter, and returns a Promise that will be resolved, after a short delay, with the article's comments.</p>
                    <p>When you click on the button, call the getPosts function. For each recovered item, calls the getComments function and adds the comments obtained in a comments property of the item. Displays items in the console (getPosts and getComments functions will always be solved without errors).</p>
                </section>
                <section class="material">
                    <div class="actions">
                        <button type="button" id="run">Run the script</button>
                    </div>
*/
