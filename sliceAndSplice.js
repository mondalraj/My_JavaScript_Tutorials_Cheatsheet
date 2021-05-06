var users = ["Rajib", "Abhishek", "Kartik", "Vaishali", "Pratham"];

// console.log(users.slice(1,4));

// slice method is used to cut a portion of an array, where first parameter is starting point and second is end point which is exclusive.


users.splice(1, 3, "Hi", "Bye");

console.log(users);

// o/p --> [ 'Rajib', 'Hi', 'Bye', 'Pratham' ]

// In splice method first argument is the starting point, second argument is the count after starting point, it delete the values in this range and add the values which are given after second parameter.