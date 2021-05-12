/*
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    courseList = [];

    getInfo(){
        return { name: this.name, email: this.email};
    }
    //setter
    enrollCourse(name){
        this.courseList.push(name);
    }
    //getter
    getCourseList(){
        return this.courseList;
    }
}


module.exports = User;
*/



// ----***---- 


//Private props getters and setters.

//If we prefix the variable with # it becomes private it cannot be directly accessible by user
// So we want getters and setters to save the data and to access the data from private variable .

/*
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    #courseList = [];

    getInfo(){
        return { name: this.name, email: this.email};
    }
    //setter
    enrollCourse(name){
        this.#courseList.push(name);
    }
    //getter
    getCourseList(){
        return this.#courseList;
    }
};

const rock = new User("Rock", "rock@rock.com");
console.log(rock.getInfo());rock.enrollCourse("React Course");
console.log(rock.getCourseList());
console.log(rock.courseList);
*/
/*
o/p->
{ name: 'Rock', email: 'rock@rock.com' }
[ 'React Course' ]
undefined //this is because it is private variable and it is not directly accessible we have to get their value by getters.
*/


// -----****----- 

//Inheritance

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    #courseList = [];

    getInfo() {
        return { name: this.name, email: this.email };
    }
    //setter
    enrollCourse(name) {
        this.#courseList.push(name);
    }
    //getter
    getCourseList() {
        return this.#courseList;
    }
    //This is even the god of private property, even child and inherited classes cannot access this.
    static login() {
        return "You are logged in";
    }
};


class subAdmin extends User {
    constructor(name, email) {
        super(name, email);
    }
    getAdminInfo() {
        return "I am sub Admin";
    }
}

const tom = new subAdmin();
console.log(tom.getAdminInfo());
console.log(tom.login());
//There is an issue where is the privacy, I don't want even the ingherited classes ka access this.
//This problem is solved by using static keyword (line 93)

console.log(tom.getInfo());

/*
o/p->
I am sub Admin
You are logged in
{ name: undefined, email: undefined } //issue!
This issue is fixed by adding constructor with same parameters and also using the super keyword.

const tom = new subAdmin("Tom", "tommac@lco.in");
*/

//This show I have also access to the User class
