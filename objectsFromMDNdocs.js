var User = {
    name : "",
    getUserName : function (){
        console.log(`UserName is: ${this.name}`);
    }
};

var rajib = Object.create(User);
console.log(rajib);
//o/p-> in browser
// {}
// __proto__

rajib.name = "Rajib Mondal";
rajib.getUserName();

//Things become wierd when we use the constructor
//syntax is very complex

var sam = Object.create(User, {
    name : { value: "Sammy" },
    courseCount: { value: 3 }
});

console.log(sam.getUserName);