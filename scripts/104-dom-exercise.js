//Exercise: Update Student Status

function updateProfile(){

// 1. Get the h1
 let studentName = document.getElementById("studentName");
// 2. Change the name to "Maria Lopez"
studentName.innerHTML =  " Maria Lopez";
// 3. Get both paragraphs using the class
let pList = document.getElementsByClassName("info");
    console.log(pList);
// 4. Change the first paragraph text to:
// Grade: A
pList[0].innerHTML =  "Grade: A";
// 5. Change the second paragraph text to:
// Status: Active
pList[1].innerHTML =  "Status: Active";
// 6. Make the first paragraph green
 pList[0].style.color = "green";         

// 7. Make the second paragraph blue
 pList[1].style.color = "blue"; 

}

