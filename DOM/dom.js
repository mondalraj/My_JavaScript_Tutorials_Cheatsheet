//Run this on browser, play along with it you will learn about it easily.

// var title = document.getElementsByTagName("h1");
//This gives the array and its properties


//Grabbing the values
// There are multiple ways of grabbing the elements

var title = document.getElementsByTagName("h1")[0].innerHTML;

var titletwo = document.getElementsByClassName("title")[0].innerText;




//Majorly 2 method to grab HTML elements using DOM
// 1. querySelector -> this returns the whole HTML item hece, more easy with this.
// 2. getElementby__  -> this returns HTML element in the form of array