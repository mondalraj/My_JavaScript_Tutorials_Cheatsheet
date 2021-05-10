const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");


// console.log(window.getComputedStyle(red).backgroundColor);  //o/p-> rgb(228, 66, 54)

//getComputedStyle property in JS is used to *grab the CSS of a particular element.*
//There are whole lot of methods inside getComputedStyle property, play along with it in the browser.
// console.log(window.getComputedStyle(red)) -> write this on browser and you will get the list of all supporting methods inside it.


const getbgColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

// console.log(getbgColor(pink));
// console.log(getbgColor(violet));


// Adding Event Listener


/*

const centerColor = getbgColor(orange);

//syntax-> elementVariable.addEventListener('typeOfEvent', callbackFunction);


orange.addEventListener('mouseenter', () => {
    center.style.backgroundColor = centerColor;
    //style method is used to add the style to the element selected
});

*/

const centerColor = getbgColor(pink);

pink.addEventListener('click', () => {
    center.style.background = centerColor;
    //style method is used to add the style to the element selected
});



//more organised approach to do this usinf function

const magicColorChanger = (element, bgColor) => {
    element.addEventListener('mouseenter', () => {
        return center.style.backgroundColor = bgColor;
    });
}


magicColorChanger(red, getbgColor(red));
magicColorChanger(cyan, getbgColor(cyan));
magicColorChanger(violet, getbgColor(violet));
magicColorChanger(orange, getbgColor(orange));
magicColorChanger(pink, getbgColor(pink));


/*
How do we do that?
1. Grab the HTML element for the functionality
2. Grab the CSS for the HTML element
3. Add the event listener to the HTML element
4. Inside the callback fuction write the functionality you want to do
5. Call the function by passing appropriate arguments
*/