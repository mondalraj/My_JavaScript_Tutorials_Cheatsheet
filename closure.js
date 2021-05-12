//Closure is complex yet important as it is used in many libraries of js.

/*
function init() {
    var firstName = "Rajib";
    function sayFirstName() {
        console.log(firstName);
    };
    sayFirstName();
};

init();
*/

//This is not gonna execute because of the lexical scoping.

//Here comes the role of closure
//In closure a reference is always returned.

/*
function init() {
    var firstName = "Rajib";
    console.log("I am init");
    function sayFirstName() {
        console.log(firstName);
    };
    return sayFirstName;
};

var value = init();
value();
*/

//o/p-> I am init
// Rajib


//Another example

function doAddition(x){
    return function(y){
        return x+y;
    };
};


var add = doAddition(5);
console.log(add(9));
//o/p-> 14
//Execution -> when doAddition() is called it return the reference of other function(y) inside it and when we call the variable again as function call with parameter it return the sum.
//As the internal reference is returning value it does not completely go off that is why main function does not go away.

//short hand notation to print line 47 and 48 combined

console.log(doAddition(3)(5));
//o/p-> 8

//doAddition()()()...   //curring