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

for (let i = 0; i < country.length; i++) {
    if (typeof country[i] !== 'string') continue;
    console.log(country[i]);
}

//Continue -> If the condition is true then it will continue by skipping that part.
//Break -> If the condition is true it will break the loop and the rest of the code in the block will not execute.



// ----****------

//while and do-while loops

