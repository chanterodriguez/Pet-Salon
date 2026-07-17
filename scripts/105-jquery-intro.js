//Common Errors:
//Do not add the jQuery CDN
//Add the jQuery CDN after your JavaScript


$("h2").hide();


//JavaScript Approach

/*function sayHellp(){
    alert("Hello Class");
}*/

// jQuery - Event Handeling
// select the button . action

$("#triggerEventButton").click(function(){
    alert("Hello cohort 69");
});

// Practicing jQuery Actions

// 1. Function to Hide the paragraph

$("#hideButton").click(function(){
    $("p").hide();
});

// 2. Funtion to Show the paragraph
$("#showButton").click(function(){
    $("p").show();
});

// 3. Funtion to Toggle the paragraph
$("#toggleButton").click(function(){
    $("p").toggle();
});

// 4. Function to Change Text the paragraph
// Action: .text("new text"); or .html("<b> new text </b>");
$("#changeButton").click(function(){
    $("p").text("This is new text") ;
});

// 5. Function to Add CSS to the paragraph
// Action: .css("color", "red");
$("#addCSSButton").click(function(){
    $("p")
    .css("color", "red")
    .css("border", "solid 2px green")
    .css ("padding", "20px");
});

// 6. Function to add a CSS class to the paragraph
$("#applyCSSClassButton").click(function() {
 $("p").addClass("my-class");
});

