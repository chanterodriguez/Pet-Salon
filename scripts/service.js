
$("#servicesForm").submit(function(event){
    //alert();
    //prevent the page from refresh
event.preventDefault();

//1. get the value
let serviceName = $("#serviceName").val().trim();
let serviceDescription = $("#serviceDescription").val().trim();
let servicePrice = $("#servicePrice").val();
//alert(serviceName);

//2. Use the values
if (serviceName  == "" || serviceDescription == "" || servicePrice == "") {
    $("#serviceName")  .css("border", "solid 2px red");
    $("#serviceDescription")  .css("border", "solid 2px red");
    $("#servicePrice") .css("border", "solid 2px red");
} else {
    alert("The service has been registered");
      $("#serviceName")
    .css("border", "");
    $("#serviceDescription")
    .css("border", "");
    $("#servicePrice")
    .css("border", "");
}

});

$("#changeModeButton").click(function(){
     $("body").toggleClass("dark-mode");

 // Ask i teh body had teh dark-mode class
 const isDark = $("body").hasClass("dark-mode");

 //Change teh button text
 // if it is dark -> show the sun
 // if it is light -> show the mood

 if(isDark){
    $("#changeModeButton").text(" ☀️ Change Mode");
 } else {
    $("#changeModeButton").text(" 🌙 Change Mode");
 }
});