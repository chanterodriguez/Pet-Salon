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