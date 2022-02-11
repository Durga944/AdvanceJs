// with var 

function letDemo(){
    var i = 10;
    for(var i = 0; i<=20; i++){
        console.log(i);
    }
    console.log(i);
}
letDemo();
console.log("###################");
// with let

function letDemo(){
    var i = 10;
    for(let i = 0; i<=20; i++){
        console.log(i);
    }
    console.log(i);
}
letDemo();

let x = 23;
 x = 34;
console.log(x);

console.log("************************");

// with const

const pi = 3.14;
// pi = 3.79;
console.log(pi);

const product = {};

// product = {};
product['name'] = "Iphone";

console.log(product);

// 
