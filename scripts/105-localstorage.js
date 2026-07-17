$("#triggerEventButton").click(function(){
    


// 1. get the values
let email = $("#userEmail").val().trim();
alert(email);


//2. Use the values
//save to local storage
localStorage.setItem("emailKey", email);
});