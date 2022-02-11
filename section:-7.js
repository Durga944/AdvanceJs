// inheritance

var project = {
    name: "App Lonch"
};

console.log(project.hasOwnProperty("name"));
var prototype = Object.getPrototypeOf(project);
console.log(prototype===Object.prototype);


// object.Create Method()

var project = {
    name: "App Lonch"
};

Object.create(Object.prototype,{
    name:{
        configurable:true,
        enumerable:true,
        value:"App Lonch",
        writable:true
    }
});


console.log("*******************");

// inheritaning from other object

var project1 = {
    name:"App Lonch",
    display: function{
        console.log(this.name);
    }
};

var project2 = Object.create(project1,{
    name:{
        configurable:true,
        enumerable:true,
        value:"App Lonched",
        writable:true
    }
});

project1.display();
project2.display();


console.log("*******************");

// constrctor inheritance introduction


function Doctor(){

}

Doctor.prototype = Object.create(Object.prototype,{
    constructor:{
        configurable:true,
        enumerable:true,
        value:Doctor,
        writable:true
    }
});

// implementing constrctor inheritance

function Doctor(name){
    this.name = name;
}

Doctor.prototype.treat = function(){
    return "treated";
};

Doctor.prototype.toString = function(){
    return "[Doctor" + this.name+ "]";
};

function Surgeon (name,type){
    this.name = name;
    this.type = type;
}

Surgeon.prototype = new Doctor();
Surgeon.prototype.constructor = Surgeon;

Surgeon.prototype.constructor = Surgeon;

Surgeon.prototype.toString = function(){
    return "[Surgeon "+this.name+"type "+this.type+ "]";
};

var doctor = new Doctor("Durga");
var surgeon = new Surgeon("Noori","Pravi");

console.log(doctor.treat());
console.log(surgeon.treat());

console.log(doctor.toString());
console.log(surgeon.toString());


console.log(doctor instanceof Doctor);
console.log(doctor instanceof Object);

console.log(surgeon instanceof Doctor);
console.log(surgeon instanceof Surgeon);
console.log(surgeon instanceof Object);


// constructor inheritance in action

