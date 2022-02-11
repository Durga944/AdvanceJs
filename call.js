function displayDetails(){
    console.log(this.id);
    console.log(this.name)
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
this.name="Marry";

displayDetails.call(student1);
displayDetails.call(student2);
displayDetails.call();