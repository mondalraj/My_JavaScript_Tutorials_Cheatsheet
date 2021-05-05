// function isEven(element){
//     // if(element % 2 ===0){
//     //     return true;
//     // }
//     // return false;


//     //Short hand notation
//     return element % 2===0;
// }

// console.log(isEven(6));
// o/p --> true


// -------*****-----

//Arrow functions
// This method makes our life in many of the cases

// var isEven = (element) => {
//     return element % 2===0;
// };

// console.log(isEven(6));


// ------*****-------


// var isEven = (element) => {
//     return element % 2===0;
// };

// var result = [2, 4, 6, 8].every(isEven);

// // every property iterate through the array and check the condition given in the parenthesis which is a function.
// // It will return true if every elemnt in the array passes the condition otherwise false.

// console.log(result); // o/p--> true




// ------****----

// how do we write same previous code in various modern day frameworks

//Callbacks

var result = [2, 4, 5, 8].every((element) =>{
    return element % 2 ===0;
});

//Short hand notation of modern JS ES8

var result = [2, 4, 6, 8].every((element) => element % 2 ===0
);


console.log(result);
