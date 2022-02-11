var course1 = {
    name:"I LOVE THE JAVASCRIPT"
};

var course2 = new Object();
course2.name = "ReactJS";

course1.name = "Hello!!!!!!!!!!";
course1.description = "I am master of JS"

console.log("description" in course1);
console.log("toString" in course1);

console.log(course1.hasOwnProperty(toString));

for(var eachProperty in course1){
    console.log(eachProperty);
    console.log(course1[eachProperty]);

}

var allProperties = Object.keys(course1);

for(var i=0; i<allProperties.length; i++){
    console.log(allProperties[i]);
    console.log(course1[allProperties[i]]);
}

console.log(course1.propertyIsEnumerable("name"));