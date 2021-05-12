//Maps work almost like objects but they are not objects, they are completely different.

var myMap = new Map();


//They are kind of default setters and getters that we can add values to them and retrieve values from them.

//syntax -> <var_name>.set(key, "Value")
myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "tres");
myMap.set(4, "Cuatro");

console.log(myMap);
//o/p -> Map(4) { 1 => 'Uno', 2 => 'dos', 3 => 'tres', 4 => 'Cuatro' }


//Grabbing values from these maps  

for(let key of myMap.keys()) {
    console.log(`Key is  ${key}`);
}

// o/p->
// Key is  1
// Key is  2
// Key is  3
// Key is  4

for(let value of myMap.values()) {
    console.log(`Value is  ${value}`);
}
//o/p->
// Value is  Uno
// Value is  dos
// Value is  tres
// Value is  Cuatro

//But I want to access both key and value at the same time.

for(let [key, value] of myMap) {
    console.log(`Key is ${key} and Value is  ${value}`);
};

//o/p->
// Key is 1 and Value is  Uno
// Key is 2 and Value is  dos
// Key is 3 and Value is  tres
// Key is 4 and Value is  Cuatro

// ----****0----

//Confusing part
//In forEach loop no matter whAT we pass it will always give the value

myMap.forEach((key) => {
    console.log(`${key}`);
});

// o/p-> Uno
// dos
// tres
// Cuatro

myMap.forEach((value) => {
    console.log(`${value}`);
});

// o/p->Uno
// dos
// tres
// Cuatro

myMap.forEach((v,k) => {
    console.log(`${v} and key is ${k}`);
});
//forEach will also return value first

myMap.delete(3);
console.log(myMap);

//o/p-> Map(3) { 1 => 'Uno', 2 => 'dos', 4 => 'Cuatro' }