var user = {
    firstName : "Rajib",
    lastName : "Mondal",
    role : "Developer",
    loginCount : 50,
    facebookSignedIn : true,
    courseList : [],

    //Declaring an object method
    buyCourse : function (courseName) {
        //this is used to access the key variables of their own object
        this.courseList.push(courseName);
    } ,
    getCourseCount : function (){
        return `${this.firstName} is enrolled in ${this.courseList.length} no. of courses`;
    },
    userInfo : function (){
        return `User Information
        Name of User is ${this.firstName} ${this.lastName}
        Role of User is ${this.role}
        Login Count of User = ${this.loginCount}
        Is User SignedIn from Facebook = ${this.facebookSignedIn}
        Courses purchased by User = ${this.courseList}`
    }
};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());

user.buyCourse("Node JS Course");
user.buyCourse("React JS Course");

console.log(user.getCourseCount());

console.log(user.userInfo());

/*
o/p ->
Rajib
Rajib is enrolled in 0 no. of courses
Rajib is enrolled in 2 no. of courses
User Information
        Name of User is Rajib Mondal
        Role of User is Developer
        Login Count of User = 50
        Is User SignedIn from Facebook = true
        Courses purchased by User = Node JS Course,React JS Course
*/