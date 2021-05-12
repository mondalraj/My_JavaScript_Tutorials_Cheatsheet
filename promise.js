const uno = () => {
    return "I am One";
};

// const dos = async () => {
//     setTimeout(()=>{
//         return "I am Two";
//     }, 3000);
// };
//Promise
const dos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ("I am Two");
        }, 3000);
    });
};

const tres = () => {
    return "I am Three";
};

/*
const callMe =  () => {
    let valOne = uno();
    console.log(valOne);

    let valTwo =  dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};

callMe();
*/
/*
I am One
Promise { undefined }
I am Three
*/

//What is promise?
// Many times when we make web request, an api req or a database request. They take some millisecond more to get connection and then get it back.
//If we call it in a variable it will problem us a lot.
//best practice is to introduce it in a asyncronous manner.
//A promise is something which has 2 states, either it is going to fullfiled or it is not going to fulfilled.




const callMe = async () => {
    let valOne = uno();
    console.log(valOne);

    //await keyword says that I am important, wait for me to execute
    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};

callMe();

/*
o/p->
I am One
I am Two
I am Three
*/