var course1 = {
    name:"Javascript fundamentals"
};

var course2 = new Object();
course2.name="ReactJS"

course1.name = "End ti End Java Project"


// accessor properties

var creditCard = {
    _name: "Durga",

    get name(){
        return this._name;
    },
    set name(value){
        this._name = value;
    }
};

console.log(creditCard.name);

creditCard.name="Bob";
console.log(creditCard.name);


// objectProperty

// var creditCard = {
//     name:"Durga"
// };

// Object.defineProperty(creditCard,"name",{

// enumerable:false
// });

// console.log("name" in creditCard);
// console.log(creditCard.propertyEnumerable("name"));


var creditCard = {
    _name:"Durga"
};

Object.defineProperty(creditCard,"name",{
    get:function(){
        return this._name;
    },
    set: function(value){
        this._name = value;
    },
    enumerable:true,
    configurable:true
});

// rettrieving property atterabutes

var creditCard = {
    name: "Durga Dharwey"
};

var description = Object.getOwnPropertyDescriptor(creditCard,"name");

console.log(description.enumerable);
console.log(description.configurable);
console.log(description.writable);
console.log(description.value);


// freeze method()

var product = {
    name : "Iphone"
};

console.log(Object.isExtensible(product));
console.log(Object.isSealed(product));
console.log(Object.isFrozen(product));

product.name = "Mac Book Pro";
console.log(product.name);