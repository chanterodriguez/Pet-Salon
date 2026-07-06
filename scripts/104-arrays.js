//1. Create an array
let names = ["Edwin", "Jey", "Austin"]; //string
let age = [20, 30, 25];//number

console.log(names);

//2. Accessing an element -> index/position
names[0]; //Edwin
console.log(names[2]);

console.log(age[1]);

// 3. Modify an element value -> =
names[1] ="Chante";
console.log(names);


age[0] = 21;
console.log(age);

//4. How any elements we have in the array? -> length

names.length; // 3

console.log(names.length);

//exercise: Print in the console all teh anmes an all the ages

console.log(names,age);//this is not the right way to do it. 
console.log(`Here is a list of names: ${names} and ages: ${age}.`);

//5. Travel the array -> for loop
for(let i=0; i<names.length; i++){
    console.log(names[i]);
}

//6. Array of Objects

let student1 = {
    name: "Chante",
    age: 23
}

let student2 = {
    name: "Kevin",
    age: 30
}

let student3 = {
    name: "Jarrett",
    age: 29
}

// Create the array with the objects
let studentsList = [student1, student2, student3]

//Assessing the objects in the studentsList array

studentsList[0].name;

console.log(studentsList[2].name);