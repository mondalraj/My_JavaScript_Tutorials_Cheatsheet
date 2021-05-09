var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");


let count=1;

//syntax -> setInterval(function,milliseconds);

/*
setInterval(() => {
    count++;
    counter.innerHTML = count; //But this will trigger the infinite loop we have to stop this after 1000 followers.
    //We have to put check till 1000
}, 0.5)
*/

setInterval(() => {
    if(count < 1000){
        count++;
        counter.innerHTML = count; 
    }
}, 1);


setTimeout(() => {
    followers.innerHTML= "Followers on Instagram";
}, 4000)