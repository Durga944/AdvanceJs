// constructor function

// function Flight(){

// }

// var flight1 = new Flight;
// var flight2 = new Flight;

// console.log(flight1 instanceof Flight);
// console.log(flight2 instanceof Flight);


// console.log(flight1.constructor === flight2.constructor);
// console.log(flight1.constructor === Flight);
// console.log(flight1.constructor === Flight);


// defining properties and methods

function Flight(airlines , flightNumber){
    this.airlines = airlines;
    this.flightNumber = flightNumber;

    this.display = function(){
        console.log(this.airlines);
        console.log(this.flightNumber);
    };
}


var flight1 = new Flight("American Airlines","AA123");
var flight2 = new Flight("South West","SW456");

console.log(flight1);
console.log(flight2);

// console.log(flight1 instanceof Flight);
// console.log(flight2 instanceof Flight);

// console.log(flight1.construtor===Flight);
// console.log(flight2.construtor===Flight);



