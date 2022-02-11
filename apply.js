function displayDetails(testscore){
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

this.id = 3;
this.name = "Marry";

displayDetails.apply(student1,[10]);
displayDetails.apply(student1,[20]);
displayDetails.apply(this,[30]);

