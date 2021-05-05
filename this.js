  console.log(this);
// o/p --> {}



var game= "cricket";
function sayName(){
    var name = "Rajib";
    console.log(this);
}

sayName();

// This will give very alientaic output
// But if you run the same code on browser it will give output as window object with various properties

// This concludes that using 'this' in this way is not correct, we will see it later.
