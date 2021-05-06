// Fill property of an array

var testArray = [5, 6, 9, 1, 4, 0, 8, 2];
console.log(testArray.fill("R", 3, 6));

// o/p -->
// [
//   5,   6,   9, 'R',
//   'R', 'R', 8, 2
// ]

// First parameter says that replace every Array element with this value, second parameter is the starting index of filling which is inclusive and third parameter is the ending index of filling whivh is exclusive.

const myNumber = [23, 67, 89, 43, 66, 88, 13];
const result = myNumber.filter((num) => num>60 );

// This property is used to filter the array elements using a codition which is declared using arrow function inside filter() and is passed as a parameter.
// This property is very useful.

console.log(result);