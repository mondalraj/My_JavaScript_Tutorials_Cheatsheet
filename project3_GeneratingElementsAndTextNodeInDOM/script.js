//Creating a course list using js

// approach
/*
1. Create the array of courses you want to insert.
2. looping through each array item courses insert them inside DOM
3. <ul class="list-group">
        <li class="list-group-item">
          Javascript course<span class="float-right">$2.1</span>
        </li>
      </ul>
    Check the architechture of the inserted courses.
3. Create each elements, class name, text node and then append them inside the ul.
4. Looping the same procedure to add all the course items.
*/

const courses = [
    {
        name: "ReactJS Complete Bootcamp",
        price: 3.2,
    },
    {
        name: "Flutter Complete Bootcamp",
        price: 4.5,
    },
    {
        name: "Angular Complete Course",
        price: 2.3,
    },
    {
        name: "MERN Stack Complete Bootcamp",
        price: 4.1,
    },
];


/* <ul class="list-group">
        <li class="list-group-item">
          Javascript course<span class="float-right">$2.1</span>
        </li>
      </ul> */

/*
1. Grab the ul
2.Loop through the array to avoid headache
3.Create li element then add class to it
4. Create text node for course name from array then insert it inside the li 
5. Create span element and add class to it.
6 Create text node of course price from array then insert it inside span.
7. Insert the span element inside li element.
8. Insert li element inside ul element.
9. Call the function only on reloading
*/



function generateList() {
    const ul = document.querySelector(".list-group");

    ul.innerHTML = ""; //Just resetting the value whe function is called.
    //This is just for stopping the repetetion of sorting the array on the basis of course prices. 

    courses.forEach((course) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$ " + course.price);

        span.appendChild(price);
        li.appendChild(span);
        ul.appendChild(li);

    });
};

// generateList();

//I don't want to call this function again and again, I want whenever my page loads then only I want to do it.

window.addEventListener("load", generateList);

// We don't add parenthesis after the function call because that is automatically done by the event listener



// -----****----


// I want to another feature of sorting the courses according to their pricing.

const button = document.querySelector(".sort-btn");

button.addEventListener("click", () =>{
courses.sort((a,b) => a.price-b.price);
//Sorting in ascending order
generateList();
});