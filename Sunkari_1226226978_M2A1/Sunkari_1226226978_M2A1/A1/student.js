// Student Name: Santrupth Sunkari
// Student ID: 1226226978
// Date: 09/02/2023

var students= [];
var student = {
    name: 'John Smith',
    birthyear: 2002,
    course: 'IFT 458',
    grade: 90,
    active: true,
    age: function calculate(){
        if(this.active){
            return 2022-this.birthyear;
        }
        else{
            return 0;
        }
    }
}
var student2 = {
    name: 'Andy Moore',
    birthyear: 2000,
    course: 'IFT 458',
    grade: 100,
    active: false,
    age: function(){
        if(this.active){
            return 2022-this.birthyear;
        }
        else{
            return 0;
        }
    }
}

students.push(student);
students.push(student2);
// console.log(student['name']);
// console.log(student.name);
students.forEach((item) => console.log(item.age()));

console.log(students);

// console.log(student2.age());
// console.log(student.age());
