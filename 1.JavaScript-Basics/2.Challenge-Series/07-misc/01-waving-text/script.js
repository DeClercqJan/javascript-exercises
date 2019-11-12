/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // document.getElementById("target").style.fontSize = "5em";
    text = document.getElementById("target").innerHTML;
    // console.log(text);
    // console.log(typeof text);
    // console.log(text.charAt(4));
    text_appended="";
    for (i=0; i<text.length; i ++) {
        // console.log(i);
        // console.log(text[i]);
        // console.log(`<span style='color:red;>'${text[i]} </span>`);
        text_appended += `<span style='color:red';>${text[i]}</span>`;
        /*
        var html = text[i].innerHTML;
        text[i].innerHTML = html.substr(0, html.length-2)
        + "<span color='red'>"
        + text[i].innerHTML.substr(-2)
        + "</span>";
        */
    }
document.getElementById("target").innerHTML = text_appended;

    /* text_array = text.split('');
    console.log(text_array);
    text_array.forEach(element => {
        console.log(element);
        // console.log(typeof element);
    });
    text_array.map(function(letter) {
console.log(letter)
    })
    */

})();

/*

            <section class="explain">
                <p>Display some text inside the target element. Create a wave effect using at least 5 different font
                    sizes.</p>
            </section>
            <section class="material">
                <p id="target">Woo-hoo! I'm making waves! Wéééé! Oh ... I think I'm having seasickness ...</p>
            </section>

*/