let name = "Chante'";
let lastname = "Rodriguez";
let age = 44;

let name2 = "Walter";
let lastname2 = "Smith";
let age2 = 26;

//Literal Object

let student1 = {
    name: "Michelle",
    dob: "02/19/2001",
    studentNummber: 1234
};

console.log(student1.name);

//1. Acces a Value -> .
student1.name
console.log("Hello, my name is", student1.name);

//Interpolation
console.log(`Hello, my name is ${student1.name} and my number is ${student1.studentNummber}.`);


//Exercise 1: Create and Access an Object
//Create an object called car with the following properties:
//brand 
//model 
//year

//Then:
//Print the entire object. 
//Print the brand using dot notation. 
//Print a sentence using template literals.


let car1 = {
    brand: "Nissan",
    model: "Rouge",
    year: 2022
}

console.log(car1);

console.log("I drive a", car1.brand);

console.log(`Hello, I drive a ${car1.brand} and it is a ${car1.model}.`);


//2. Update a value -> =
student1.name = "Chante Rodriguez";
console.log(student1.name)

student1.studentNummber = 5678;
console.log(student1.studentNummber)


// === Object Constuctor === //
function Person(valueName, valueLastname, valueAge){
    this.name = valueName;
    this.lastname = valueLastname;
    this.age = valueAge;
}

// Creating an object with the constuctor

let person3 = new Person("Chante'", "Rodriguez", 44);