//  Object  de-structuring 

let student = {
    firstName : "Durga",
    lastName :"Dharwey",
    score:90
};

// const fName = student.firstName;
// const lName = student.lastName;
// const sCore = student.score;

// console.log(fName,lName,sCore);

// const {firstName:fName,lastName:lName,score:sCore} = student;

// console.log(fName);
// console.log(lName);
// console.log(sCore);

// we can use same name also

const {firstName:firstName,lastName:lastName,score:score} = student;

console.log(firstName);
console.log(lastName);
console.log(score);

console.log("###########");

//  Array  de-structuring 

const courses = ["java","python","js"];

const [c1,c2,c3] = courses;
console.log(c1);
console.log(c2);
console.log(c3);

console.log("*******************");

//  Function de-structuring 

function add(numbers){
    console.log(numbers.n1+numbers.n2+numbers.n3);
}
add({n1:10,n2:20,n3:30});

console.log("###############");

// for of loop

let names = ["Durga","Bob","Reddy"];

for(let value of names){
    console.log(value);
}
