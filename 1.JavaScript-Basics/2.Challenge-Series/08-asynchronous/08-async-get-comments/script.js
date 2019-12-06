/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", async function() {
        posts = await window.lib.getPosts();
        // opnieuw hetzelfde gekke: de eerste console.log wordt al bevolkt ...
        console.log(posts);
        posts.map(async function(post) {post.comments = await window.lib.getComments(post.id)});
        console.log(posts);
    })
    // your code here
})();

/* 
Get posts and comments (async/await)</strong>
You must have noticed, in the previous exercise, that the articles received via the window.lib.getPosts function included an id property.
The function window.lib.getComments() is available in the script. It must receive an article id as a parameter, and returns a Promise that will be resolved, after a short delay, with the article's comments
When you click on the button, call the getPosts function. For each recovered item, calls the getComments function and adds the comments obtained in a comments property of the item. Displays items in the console (getPosts and getComments functions will always be solved without errors).</p>
<strong>Note :</strong> for this exercise, use the syntax <em>async/await</em>.
*/
