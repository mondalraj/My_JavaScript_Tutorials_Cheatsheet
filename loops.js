//For loops

/*
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
*/

const country = [
    "India",
    "USA",
    "Russia",
    "Japan",
    "Nepal",
    2020,
    "Britain"
];

// for(let i=0;i<country.length;i++){
//     console.log(country[i]);
// }

//If we only want to print only the strings of the array

/*
for (let i = 0; i < country.length; i++) {
    if (typeof country[i] !== 'string') continue;
    console.log(country[i]);
}
*/

//Continue -> If the condition is true then it will continue by skipping that part.
//Break -> If the condition is true it will break the loop and the rest of the code in the block will not execute.



// ----****------

//while and do-while loops

let i=0;
/*
while(i<country.length){
    console.log(country[i]);
    i++;
}
*/



// --------*****------

// do-while loop

/*
do{
    console.log(country[i]);
    i++;
}while(i<country.length);
*/

// Do while loop runs for at least one time even iof the condition is false.

// ----****-----

// for-each loop

// This is basically not considered as a loop but is used as a method in an array.

// syntax -> country.forEach(callback function)

// country.forEach((s) => {console.log(s)});


// -----****----

// for-in and for-of loop

// for-of loop is majorly used for the arrays

//  for-in is used for objects

const names = ["Youtube", "facebook", "Netflix", "Amazon", "Instagram"];

for(const n of names){
    console.log(n);
}


const symbols ={
    yt : "Youtube",
    ig : "Instagram",
    fb : "facebook",
    teg : "TheEccentricGeek"
};

for(const n in symbols){
    console.log(n); //This gives us the keeys back.
    // o/p -> yt
    //        ig
    //        fb
    //        teg
    console.log(`key is : ${n} and value is: ${symbols[n]}`); //Accessing values from keys of object
}