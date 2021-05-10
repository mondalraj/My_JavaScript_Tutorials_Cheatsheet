//Functional way of defining the objects -> recommended way.
//Also we create the prototype/blueprint of an object so that we don't need to define object again and again for new users


var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function() {
        console.log(`Course Count is: ${this.courseCount}`);
    };
};

// var rajib = User("Rajib", 5);

// console.log(rajib); // o/p-> undefined why?

var rajib = new User ("Rajib", 5);
var abhishek = new User ("Abhishek", 2);

console.log(rajib);
console.log(abhishek);

/*
o/p ->
User {
  firstName: 'Rajib',
  courseCount: 5,
  getCourseCount: [Function (anonymous)]
}
User {
  firstName: 'Abhishek',
  courseCount: 2,
  getCourseCount: [Function (anonymous)]
}
*/