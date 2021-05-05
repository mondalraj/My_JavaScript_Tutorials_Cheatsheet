var name= "Rajib";
console.log("1. ",name); //o/p --> Rajib

// function myName(){
//     console.log("2. ",name);  // o/p --> Rajib , name will be inherited from global scope
// }

myName();


function myName(){
    var name= "Mr. Mondal";
    console.log("3. ",name);  // o/p --> Mr. Mondal, name variable is declared inside function scope

    function myNameTwo(){
        console.log("3. ", name); // o/p--> Mr. Mondal
    }

    myNameTwo();
}