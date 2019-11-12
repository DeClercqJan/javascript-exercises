/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {
  // your code here

  // oplossing, geïnspireerd door Sander. EDIT: zijn eigen code werkt niet als ik het hier plak. Maar toch interessante ideen 
  // enkel posts oproepen en binnen posts roep je getComments aan met de info die je over de articles hebt verzameld

  (() => {
    const callback = (err, articles) => {
      // console.table(articles);
      console.log(articles);
      articles_array = [];
      comments_array = [];
      const callback_2 = (err, comments) => {
        console.log(comments);
        comments_array.push(comments);
        articles_array.push(comments);
        // console.table(comments);
        
         articles.forEach(element_2 => {
           console.log(element_2.comments);
           
          // console.log(element_2.id);
        })
        
      };
      // to do:   adds the comments obtained in a comments property of the item.
      // new_array = [];
      // new_array.push({ type: "Fiat", model: "500", color: "white" });
      // console.log(new_array);
      // console.log(new_array.type);
      // console.log(new_array[0].type);
      // console.log(articles[0].title);
      articles.forEach(element => {
        // console.log(element.title)
        element.comments = "test";  // DEZE KOMT GELIJK HET DICHTST IN DE BUURT
        console.log(element);
        // console.log(element);
        // console.log(element.id);
        // articles.push(element.id);
        comment = window.lib.getComments(element.id, callback_2);
        // element.push(comment);
        // console.log(comment);
        // element.join(comment);
        // console.log(element);
        element.comments = comment;
        console.log(comments_array);
      });
      console.log(articles);
      console.log(articles_array);
    };
    document.getElementById("run").addEventListener("click", () => {
      window.lib.getPosts(callback);
      // window.lib.getComments(1, callback);
    });
  })();
})();


/*
You must have noticed, in the previous exercise, that the articles received via the window.lib.getPosts function included an id property. 
The function window.lib.getComments() is available in the script. 
It must receive an article id as the first parameter, as well as a callback as the second parameter. 
After a short delay, the callback will be executed with two parameters: the first one contains an error (if there is one, if not null), the second one a table of the comments of the article. 
When you click on the button, call the getPosts function. For each recovered item, calls the getComments function and adds the comments obtained in a comments property of the item. 
Displays items in the console (getPosts and getComments functions never return errors)
*/
