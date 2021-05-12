const uno = () => {
    console.log("I am One");
};

const dos = () => {
    setTimeout(()=>{
        console.log("Woohooo!");
    }, 3000);
    console.log("I am Two");
};

const tres = () => {
    console.log("I am Three");
};


uno();
dos();
tres();

/*
I am One
I am Two
I am Three
Woohooo!
* this is because of event loop*
*Also known as non blocking io*
*/

//The classic was of execution of Javascript is asyncronously i.e. rest of the code executes even if some code is taking more time to execute.

//But sometimes we only want to execute the later code only if the previous code is executed this could be any web API, or fetching data from database whose later code is dependent on the database data.
//This syncronous property is also there in js
