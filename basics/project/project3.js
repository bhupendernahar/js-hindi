const clock = document.getElementById('clock');

setInterval(function () {
  //let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


// it is projrct in which we are going to create a clock using javascript
// we will use setInterval to update the clock every second
// we will use toLocaleTimeString to format the time
// we will use innerHTML to update the clock element in the HTML
// we will use getElementById to get the clock element from the HTML
// we will use document to access the HTML document
// we will use setInterval to call a function every second
// we will use Date to get the current date and time
// we will use new Date() to create a new date object
// we will use toLocaleTimeString() to format the time in a readable format
// we will use innerHTML to update the clock element with the formatted time
// we will use console.log to log the clock element to the console