// const user = ["Rajib", 5, "Admin"];

// var role = user[2];
// var name = user[0];

//Short hand notation 

// var [name, courseCount, role] = user;

// console.log(role); // o/p-> Admin

//It is not common to work with destructuring of data in an array.

// ------****---- 

//Most of the time we would use it with the object.

const myUser = {
    name: "Rajib",
    courseCount: 5,
    role: "Admin",
};

console.log(myUser.courseCount); //oldfashioned

const {name, mycourseCount, role} = myUser;

console.log(name); //o/p --> Rajib
console.log(mycourseCount); //o/p -->undefined
//It is necessary type should be match and object key should also match.