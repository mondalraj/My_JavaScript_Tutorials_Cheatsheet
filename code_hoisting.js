// function tipper(a){
//     var bill = a;
//     console.log("Your tip is ", bill+5);
// }

// tipper(10);  // o/p = 15
// tipper("10");  // o/p = 105  why?



// ----***----

//Using parseInt()

tipper("10");  // now o/p = 15

function tipper(a){
    var bill = parseInt(a);
    console.log("Your tip is ", bill+5);
}


// --------****------

// Code hoisting

// bigTipper("10");

// var bigTipper= function(a){
//     var bill = parseInt(a);
//     console.log("Your tip is ", bill+5);
// }

// error --> bigTipper is not a function. why?

// because bigtipper is declared as variable but it is a function oviously.

// Function Declaration are scanned and made available
// Variable declaration are scanned and made undefined

//  So if we declare function like this we have to declare function first then call that.


// ----****------

console.log(name);  //o/p --> undefined
var name = "Rajib";

// Variable declaration are scanned and made undefined



function myName(){
    var name = "MR. Raj";
    console.log(name);
}

myName();  // o/p --> MR. Raj

console.log(name);  // o/p --> Rajib