//function  decelaration

function evenOrOdd1(num){
    if(num%2==0){
        return "even";
    }else{
        return "odd";
    }
}

console.log(evenOrOdd1(10));

// function expression

var evenOrOdd2 = function(num){
    if(num%2==0){
        return "even";
    }else{
        return "odd";
    }
};
console.log(evenOrOdd2(5));