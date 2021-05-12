//Best Practice -> Use "" For strings and '' for single characters

//Method to initialize a string

// var name = "Rajib";
// var name = 'Rajib';

//Use of Template Literals -> ES6 Feature
var name = `Rajib`;
var fullName = `${name} Mondal`;

console.log(fullName);

//They also have got methods like of an array

console.log(fullName.charAt(0)); //o/p-> R
console.log(fullName.endsWith("l")); //o/p->true

console.log(fullName.includes("Raj")); //o/p-> true
console.log(fullName.toUpperCase());