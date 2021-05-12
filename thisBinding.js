const rajib = {
    firstName: "Rajib",
    lastName: "Mondal",
    role: "Admin",
    courseCount: 4,
    getInfo: function () {
        console.log(`
            First Name is ${this.firstName}
            Last Name is ${this.lastName}
            His role is ${this.role}
            and he is studying ${this.courseCount} courses
        `);
    }
};

//Copy this code in browser and have a look in __proto__ of getInfo() object.
/*

rajib <Enter>

{firstName: "Rajib", lastName: "Mondal", role: "Admin", courseCount: 4, getInfo: ƒ}
courseCount: 4
firstName: "Rajib"
getInfo: ƒ ()
    arguments: null
    caller: null
    length: 0
    name: "getInfo"
prototype: {constructor: ƒ}
__proto__: ƒ ()
    apply: ƒ apply()
        arguments: (...)
        bind: ƒ bind()
            arguments: (...)
            caller: (...)
            length: 1
            name: "bind"
        call: ƒ call()
        caller: (...)
        constructor: ƒ Function()
        length: 0
        name: ""
        toString: ƒ toString()
        Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()
        get arguments: ƒ ()
        set arguments: ƒ ()
        get caller: ƒ ()
        set caller: ƒ ()
[[FunctionLocation]]: VM37:6
[[Scopes]]: Scopes[2]
lastName: "Mondal"
role: "Admin"
__proto__: Object

*/


const dj = {
    firstName: "Rock",
    lastName: "DJ",
    role: "sub-Admin",
    courseCount: 3,

};

rajib.getInfo();
// dj.getInfo(); //error bca getInfo method is not defined in dj

//So, how can we borrow a method from rajib without even copy and pasting the getInfo method from rajib

//Here comes the role of bind

rajib.getInfo.bind(dj);
//This will return the reference.
//This will not run the code, to run it

rajib.getInfo.bind(dj)();

// OR 

var djInfo = rajib.getInfo.bind(dj);
djInfo();

// Binding always gives the reference back and we have to run that reference.