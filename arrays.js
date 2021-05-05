// Two methods of declaring an array

//1.
var countries = ["India","USA","Japan","Russia"];

//2.
var states = new Array("Delhi","Bangalore","Mumbai","Kashmir");

//Accessing an Array 

// console.log(states);
// console.log(states[1]);
// console.log(states.length); // Printing lenght of array

states[3]= "West Bengal"; // Replacing an array element

// console.log(states);


// ----****------

var user = ["Rajib", "Mondal", "abc.gmail.com", 3, 50, true];
// This array initialisation is absolutely correct but it is not preferred as it is not a good data structure.


user.pop(); //Remove the last value
user.shift(); //Remove the very first value.
// console.log(user);

user.unshift("New User"); // add the value at the very first of the array and rest values would be shifted after.

console.log(user);


// ----****----

//  Very useful while creating applications.

console.log(user.indexOf("Mondal")); // Gives the index of that value in an array, useful in searching through an array, deleting it, modifying it etc... 

// It will print -1 if there is no such value in the array.



// -----****-----

// converting an element into an array with letters

console.log(Array.from("Rajib"));

// o/p--> ['R', 'a', 'b', 'j', 'i', 'b']