// For all regular function calls, this points to window/global object.

var user = {
    firstName: "Rajib",
    courseCount: 5,
    getCourseCount: function () {
        console.log("line 7", this);
        function sayHello(){
            console.log("Hello");
            console.log("line 10", this);
        }
        sayHello(); //Now this is a regular function call so, this will give again the wierd global object output.
    }
};

user.getCourseCount(); //This is not a regular function call this is function call using an object.

// o/p -> line 7 {
//     firstName: 'Rajib',
//     courseCount: 5,
//     getCourseCount: [Function: getCourseCount]
//   }