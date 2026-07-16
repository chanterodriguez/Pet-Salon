//Literal Object

let salon = {
    name: "Diva Pet Salon",
    hours: {open: "9:00 AM",
            close: "6:00 PM"},
            phone: "(555) 018-2024",
    address: {street: "18 Rue de la Paix",
            city: "New York",
            state: "NY",
            zip: "10001"}
};

function displaySalonInfo() {
  const salonInfo = document.getElementById("salon-info");
 
  if (salonInfo) {
    salonInfo.innerHTML = "<p>" + "Welcome to the " + salon.name + "!" + " We are located at " + salon.address.street + ", " + salon.address.city + ", " +  salon.address.state + " " + salon.address.zip +   "  |  " + "Hours: " + salon.hours.open + "  |  " + salon.hours.close + "  |  " + "Phone: " + salon.phone + "</p>";
  }
}
 
document.addEventListener("DOMContentLoaded", displaySalonInfo);
