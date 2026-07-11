// Pet Object Literals

let pet1 = {
  name: "Mello",
  age: 15,
  gender: "Male",
  breed: "Yokie Poo",
  service: "Full Groom & Blowout"
};

let pet2 = {
  name: "Mochi",
  age: 3,
  gender: "Female",
  breed: "Malti Poo",
  service: "Bath & Trim"
};

let pet3 = {
  name: "Sake'",
  age: 3,
  gender: "Feale",
  breed: "Malti Poo",
  service: "Spa Package & Nail Filing"
};

// Pets Array 

let petsList = [pet1, pet2, pet3];

// Display Function 

function displayPets() {
  let petsDisplay = document.getElementById("pets-display");
 
  let ol = document.createElement("ol");
  ol.classList.add("pets-list");
 
  for (let i = 0; i < petsList.length; i++) {
    let li = document.createElement("li");
    li.classList.add("pet-item");
 
    let nameSpan = document.createElement("span");
    nameSpan.classList.add("pet-item-name");
    nameSpan.textContent = petsList[i].name;
 
    li.appendChild(nameSpan);
    ol.appendChild(li);
  }
 
  petsDisplay.appendChild(ol);
}
 
document.addEventListener("DOMContentLoaded", displayPets);




// === Object Constuctor === //
function Pet(petName, petAge, petBreed, petGender, petService){
    this.name = petName;
    this.age = petAge;
    this.breed = petBreed;
    this.gender = petGender;
    this.service = petService;
}

function registerPet() {
    event.preventDefault();

    let petName = document.getElementById("petName").value;
    let petAge = document.getElementById("petAge").value;
    let petBreed = document.getElementById("petBreed").value;
    let petGender = document.getElementById("petGender").value;
    let petService = document.getElementById("petService").value;


    //b 1. Print the student object in the console
    let newPet = new Pet(petName, petAge, petBreed, petGender, petService);
    console.log(newPet);

    //c. Use the object to display the new pet in the table
    const body = document.getElementById("body");

    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${newPet.name}</td>
    <td>${newPet.age}</td>
    <td>${newPet.breed}</td>
    <td>${newPet.gender}</td>
    <td>${newPet.service}</td>
    <td><button class="btn btn-danger">Delete</button></td>
    `;

    body.appendChild(row);
}