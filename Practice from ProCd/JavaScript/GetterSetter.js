//Getter..........

/* const student={
    firstName:'Nikhil',

    get getName(){
        return this.firstName;

    }
};

console.log(student.firstName);  //Nikhil
console.log(student.getName);    //Nikhil */


// console.log(student.getName());  //Error




//////Setter..................

const Student={
    firstName:'Nikhil',

    set changeName(newName){
        this.firstName=newName;
    }
};
console.log(Student.firstName);
Student.changeName='Mayank';

console.log(Student.firstName);
