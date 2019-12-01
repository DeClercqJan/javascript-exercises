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

  /*
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
  */

  // EDIT:tweede poging: geraak al wat dichter, maar lukt uiteindelijk niet. Ik kijk naar de oplossing en verbeter wat ik had
  // belangrijkste was dat het eigenlijk simpeler kon: ik kon meteen comments aan post linken, daar ik voor elke post comments aan het genereren was, maar ik dacht dat ik eerst weer arrays moest bouwen om eraan te kunnen en die dan met elkaar te matchen en dat was dus niet nodig
  // belangrijkste lessen: de vorm lijkt er niet zo goed op: ik deel het meer op, terwijl oplosser het meer nest.
  //  De scope van postsProcessed werkt niet met let in mijn oplossing ...?
  postsProcessed = 0;
 
  function callback_2(error, comments) {
    // console.log(article_id);

    // EDIT NA VERBETERING BEKEKEN TE HEBBEN (ZIE OOK HIERONDER°)
    post.comments = comments;
    // console.log(post);
    // console.log(postsProcessed);
    if (++postsProcessed === post.length) {
    console.log(post);
    }

    comments_array = [];
    if (error) {
      console.log(error);
    }
    if (comments) {
      // console.table(comments);
      comments_x = comments;
      // comments_array.push(comments_x);
      // console.log(comments_x);
      // console.log(comments_array);
      //  console.log(articles_array[i]);

      // articles_array.push(comments_array);
      // console.log(articles_array);
      // articles_array.forEach(element => console.log(element));
    }
    // console.log(articles_array[article_id]);
    // console.log(comments_array);
    // console.log(article_id_array);
    for (id in articles_array) {
      // console.log(id);
      i = id;
      // console.log(articles[id].title);
      // console.log(articles_array[i]);
      // articles_array[i].comments = "test";
      articles_array[i].comments = [];
      // console.log(articles_array[i]);
      articles_array[i].comments = comments_x;
      // console.log(articles_array[i]);
    }
  }

  function callback(error, articles) {
        // EDIT NA VERBETERING BEKEKEN TE HEBBEN (ZIE OOK HIERONDER°)
    postsProcessed = 0;

    if (error) {
      console.log(error);
    }
    article_id_array = [];
    if (articles) {
      console.log(articles);
      articles_array = articles;
      articles.forEach(article => {
        // EDIT NA VERBETERING BEKEKEN TE HEBBEN (ZIE OOK HIERONDER°)
        post = article;

        //    console.log(article);
        //    console.log(article.id);
        article_id = article.id;
        // console.log(article_id);
        article_id_array.push(article_id);
        // console.log(article_id_array);
        test = window.lib.getComments(article_id, callback_2);
        // console.log(test);
      });
    }
  }

  document.getElementById("run").addEventListener("click", () => {
    window.lib.getPosts(callback);
  });

  /* de oplossing van lenny 

  (() => {
    document.querySelector("#run").addEventListener("click", () => {
        window.lib.getPosts((error, posts) => {
            let postsProcessed = 0;

            posts.forEach(post => {
                window.lib.getComments(post.id, (err, comments) => {
                    post.comments = comments;

                    if (++postsProcessed === posts.length) {
                        console.log(posts);
                    }
                });
            });
        });
    });
})();

*/
})();

/*
You must have noticed, in the previous exercise, that the articles received via the window.lib.getPosts function included an id property. 
The function window.lib.getComments() is available in the script. 
It must receive an article id as the first parameter, as well as a callback as the second parameter. 
After a short delay, the callback will be executed with two parameters: the first one contains an error (if there is one, if not null), the second one a table of the comments of the article. 
When you click on the button, call the getPosts function. For each recovered item, calls the getComments function and adds the comments obtained in a comments property of the item. 
Displays items in the console (getPosts and getComments functions never return errors)
*/
