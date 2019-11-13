/* becode/javascript
 *
 * /07-misc/03-worst-ui-one/script.js - 7.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("slider").addEventListener("input", function() {
        console.log("test");
        value = document.getElementById("slider").value;
        console.log(value);
        document.getElementById("target").innerHTML = `0${value}`;
    })
    // your code here

})();

/*
            <section class="explain">
                <p>An exercise in creating the worst possible user interface for dialing a phone number: use the value
                    of the slider to show the phone number (with a leading 0) in the target paragraph (from 0460000000
                    to 0499999999).</p>
            </section>
            <section class="material">
                <p id="target">0460000000</p>
                <form action="#" method="post">
                    <div class="field full">
                        <input type="range" min="460000000" max="499999999" value="460000000" id="slider"
                            name="slider" />
                    </div>
*/