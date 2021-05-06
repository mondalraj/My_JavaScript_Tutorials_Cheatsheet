// Declaring an Object
// It's role is similar to Array, but is is more optimized and is preferred most of the times in development and API's

var user = {
    firstName : "Rajib",

    // ( key : value ) pairs

    lastName : "Mondal",
    role : "Developer",
    loginCount : 50,
    facebookSignedIn : true
};

//Accessing Objects

console.log(user.firstName);
console.log(user["lastName"]);
//Second method is confusing don't forget to write key name inside "".



// Manipulating object values.

console.log(user.facebookSignedIn);
// o/p --> true

// Updating the Signed in response
user.facebookSignedIn = false;

console.log(user.facebookSignedIn);
// o/p --> false

console.table(user);
// Pritting whole object in table format
// Interesting?

/*
┌──────────────────┬─────────────┐
│     (index)      │   Values    │
├──────────────────┼─────────────┤
│    firstName     │   'Rajib'   │
│     lastName     │  'Mondal'   │
│       role       │ 'Developer' │
│    loginCount    │     50      │
│ facebookSignedIn │    false    │
└──────────────────┴─────────────┘
*/