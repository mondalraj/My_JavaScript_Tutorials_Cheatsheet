// import User from "./classesjs.js"

const User = require("./classesjs.js");
//Getting an access of the user class from some other file

const rajib = new User("Rajib", "mondalrajib@gmail.com");
//If we are declaring the constructor then it is necessary to pass the argument list.

console.log(rajib.getInfo());
//o/p-> { name: 'Rajib', email: 'mondalrajib@gmail.com' }

rajib.enrollCourse("React Bootcamp");
rajib.enrollCourse("Django Bootcamp");

console.log(rajib.getCourseList());
//o/p-> [ 'React Bootcamp', 'Django Bootcamp' ]

let Courses = rajib.getCourseList();

Courses.forEach((c) => {
    console.log(c);
});
//o/p-> React Bootcamp
// Django Bootcamp
