//__proto__ -> in browser is really powerful working as a contructor.
//There are whole lot of things inside __proto__ explore this in the browser.


var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function() {
        console.log(`Course Count is: ${this.courseCount}`);
    };
};

//Now I want to create a method named getFirstName() in User object, I can do directly to the object and create a method inside object but this is not recommended way as in bigger projects we don't do like that we don't change the main user object, instead we create a method outside the object as this method is only required for a specific feature. So, how do we do that?

User.prototype.getFirstname = function () {
    console.log(`Your Firstname is: ${this.firstName}`);
};
//Injecting some of the things to the User Object from outside the object.
//This is really amazing


var rajib = new User ("Rajib", 5);
rajib.getCourseCount();
rajib.getFirstname();


var abhishek = new User ("Abhishek", 2);
abhishek.getCourseCount();
abhishek.getFirstname();

/*
o/p->
Course Count is: 5
Your Firstname is: Rajib
Course Count is: 2
Your Firstname is: Abhishek
*/



// ----****-----
// __proto__ is very powerful, it contains a list of every property and methods that can be directly accessible.
//Play along with it in the browser
// Declare something, then print it, then go through the __proto__


//Also learn about hasOwnProperty inside __proto__ which we can check if the property exists then we will access the code.

if(rajib.hasOwnProperty("firstName")) {
    rajib.getFirstname();
}
//If the firstName property exists then I can print it otherwise if we use previous blunt method undefined will be returned in case property does not exists, there debugging will be very difficult.