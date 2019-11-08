/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  /* EERSTE POGING 
    document.getElementById("run").addEventListener("click", function() {
        // OPM: ik heb gewoon een error-message meegegven, en de console is leeg ALS JE OP DE KNOP DRUKT maar mogelijk is het niet dat wat gevraagd wordt
        console.log(window.lib.getPosts("error"));
    })
*/
  // jasper zijn oplossing
  (() => {
    const callback = (err, articles) => {
      console.table(articles);
    };

    document.getElementById("run").addEventListener("click", () => {
      window.lib.getPosts(callback);
    });
  })();
  
})();

/*

The <strong> window.lib.getPosts()</strong> function is available in the script. 
It must receive a callback parameter. 
After a short delay, the callback will be executed with two parameters: 
the first contains an error (if there is one, otherwise null), the second an array of articles.

DEZE VORM VERSTA IK NOG, MAAR ALS HET DAN IN ARROW FUNCTIONS WORDT GESCHREVEN + VERSCHILLENDE MAPPEN WPORDEN AANGEROEPEN
    function createQuote(quote, callback){ 
        var myQuote = "Like I always say, " + quote;
        callback(myQuote); // 2
      }
      
      function logQuote(quote){
        console.log(quote);
      }
      
      createQuote("eat your vegetables!", logQuote); // 1


      
*/
