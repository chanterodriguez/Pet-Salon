
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