var returnedValue = Math.max(1, 5, 9, 0, 3, 4);
console.log(returnedValue);
//o/p ->9


var myObj = {};

Object.assign(myObj, { a: 1, b: 2, c: 3 }, { x: 4, y: 5 });
console.log(myObj);

//o/p ->{ a: 1, b: 2, c: 3, x: 4, y: 5 }
//It is combining all the objects after the first parameter, and the condition is the object should be empty initially.


// ----****------

//We want to pass the argument list as a pack of data in the form of Array, Can the function identify them as parameters?

function sumOne(a, b) {
    return a + b;
}

var myA = [5, 4, 1];
console.log(sumOne(myA));
//o/p-> 5,4undefined
// It is trying to understand what is happening since, the data is in packed format that is my it returns this output..


//But can we Access the parameters as an array?
//Yes, definitely using **spread Operator**


console.log(sumOne(...myA));
//Spread Operator is it takes the group and tries to spread data into multiple values.
//o/p->9

//Write now it is array it it can also perform with objects

//Only 4 and 5 is passed as parameter after that all numbers are ignored automatically


// ----****---- 

//But what if I don't know the size of values but I want to perform that operation no matter how many values do I get.


//REST Operator
function sumTwo(...args) {
    console.log(args);
    //o/p ->[ 2, 34, 56, 12, 100 ]
    //Rest is inverse of spread it convert individual values to array
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return sum;
};

console.log(sumTwo(2, 34, 56, 12, 100));



// ----***---- 

//What if we want to multiply first 2 arguments then rest will be added.

function sumThree(a, b, ...args) {
    console.log(args); //o/p ->[ 56, 12, 100 ]
    let multi = a*b;
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return [sum, multi];
};

console.log(sumThree(2, 34, 56, 12, 100));
//o/p ->[ 168, 68 ]