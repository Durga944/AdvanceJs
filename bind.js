function displayDetails(testscore,){
    console.log(this.id);
    console.log(this.name);
    console.log(testscore);
    

}

var student1 = {
    id:1,
    name:"Durga"
}

var student2 = {
    id:2,
    name:"Noori"
}

this.id=3;
this.name="Marry";

var displayForStudent1 = displayDetails.bind(student1,10);
displayForStudent1();
var displayForStudent2 = displayDetails.bind(student2,20);
displayForStudent2();
