function hello(name){
    return "Hello"+name;
}

var myFunc = new Function("name","return 'Hello' + name");

console.log((hello instanceof Function));
console.log((hello instanceof Object));


