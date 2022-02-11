var student = [23,45,10,100,67];
student.sort(function(num1,num2){
    return num1-num2;
});
console.log(student);


function product(){
    var result = 1;

    for(var i=0; i<arguments.length; i++){
        result*=arguments[i];
    }
    return result;
}

console.log(product(3,4,5));
console.log(product(8,4,5));
console.log(product(3,4,9));
console.log(product(3,7,5));
console.log(product());

