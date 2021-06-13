/*Add DOM event listeners and handlers to toggle the on/off state of three bulbs.

- When a user clicks on the "Stop" button, toggle the [stop bulb's color][stop-color].
- When a user clicks on the "Slow" button, toggle the [slow bulb's color][slow-color].
- When a user clicks on the "Go" button, toggle the [go bulb's color][go-color].
*/

(function exercise() {
  'use strict';
  var stop = document.getElementById("stopButton")
  var slow = document.getElementById("slowButton")
  var go = document.getElementById("goButton")


  stop.addEventListener("click", function () {

    document.getElementById('stopLight').classList.toggle('stop')
  })


  slow.addEventListener("click", function () {

    document.getElementById('slowLight').classList.toggle('slow')
  })


  go.addEventListener("click", function () {

    document.getElementById('goLight').classList.toggle('go')
  })

  //Add new DOM event listeners and handlers to log the mouse state of each button.
  stop.addEventListener('mouseenter', e => {
    console.log("Entered stop button");
  });

  stop.addEventListener('mouseleave', e => {

    console.log("Left stop button");

  });

  slow.addEventListener('mouseenter', e => {
    console.log("Entered slow button");
  });

  slow.addEventListener('mouseleave', e => {

    console.log("Left slow button");

  });

  go.addEventListener('mouseenter', e => {
    console.log("Entered go button");
  });

  go.addEventListener('mouseleave', e => {

    console.log("Left go button");

  });


})

  ();




