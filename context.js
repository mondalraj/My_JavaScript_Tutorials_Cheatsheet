// sayHello();

// function sayHello(){
//     console.log("Hello");
// }

// ------***--------

// Advanced Concept



// if(2===2){
//     console.log("This is true");
// }

// // Number is not equal to string

// if(2==="2"){
//     comsole.log("This is false");
// }


// ----****-----


var myName="Rajib";

// if(myName===myName){
//     console.log("This is a true statement");
// }


if(myName===window.myName){
    console.log("This is not a true statement");
}

//window is not defined --> error
// Beacause of global context, this code will run on browser but window object is not defined on node, oviously there is a way in node also but now with window.



// There are two types of context  1. Global context  2. Execution Context