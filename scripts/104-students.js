// === Object Constuctor === //
function Student(studentName, studentAge, studentCourse){
    this.name = studentName;
    this.age = studentAge;
    this.course = studentCourse;
}

function registerStudent() {
    event.preventDefault();

    let studentName = document.getElementById("studentName").value;
    let studentAge = document.getElementById("studentAge").value;
    let studentCourse = document.getElementById("studentCourse").value;


    //b 1. Print teh student object in the console
    let newStudent = new Student(studentName, studentAge, studentCourse);
    console.log(newStudent);

    // c. Use the object to display the new student in the table
    const body = document.getElementById("body");

    const row = document.createElement("tr");

    row.innerHTML = `
    <td> ${newStudent.name} </td>
    <td> ${newStudent.age}</td>
    <td> ${newStudent.course}</td> 
    <td> <button class="btn btn-danger delete-btn"> Delete </button> </td>
    `;

// Delete functionality


row.querySelector(".delete-btn").addEventListener("click", function(){ const confirmation = confirm(" Are you sure you want to del this row?");
    if(confirmation){ 
    row.remove();
    }
});

    body.appendChild(row);
}


