// prototype object

var passenger = {
    name:"Durga"
};

console.log("name" in passenger);
console.log(passenger.hasOwnProperty("name"));
console.log("hasOwnProperty" in passenger);
console.log(passenger.hasOwnProperty("hasOwnProperty"));
console.log(Object.prototype.hasOwnProperty("hasOwnProperty"));
console.log("*********************************");

// checking the prototype properety 

var myObj = {};

var prototype = Object.getPrototypeOf(myObj);
console.log(prototype===Object.prototype);
console.log(Object.prototype.isPrototypeOf(myObj));
console.log("****************************************");

// how property is resolve by js engeen

var myObj = {};
console.log(myObj.toString());

myObj.toString = function(){
    return "My toString Method";
};

console.log(myObj.toString());

delete myObj.toString;

console.log(myObj.toString());

console.log("****************");

// using prototype on our project

function Flight(airlines,flightNumber){
    this.airlines = airlines;
    this.flightNumber = flightNumber;
}

Flight.prototype.display =  function(){
    console.log(this.airlines);
    console.log(this.flightNumber);
}

var flight1 = new Flight("American Airlines","AA123");
var flight2 = new Flight("South West" ,"Sw456");

flight1.display();
flight2.display();

console.log("*******************");

// Built in Object Prototypes

String.prototype.display = function(){
    console.log(this.toString());
}

"Durga".display();

