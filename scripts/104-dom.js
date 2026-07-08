function update(){
    // Testing the function and button connection
    //alert("Connected");


    //1. Get the title (h1)
    let title = document.getElementById("title");

    //1.1 Update the text
    //innerHTML
    //textContent
    title.innerHTML =  "<i> Hello, class! </i>";

    //2.Get the text elements (p)

    let pList = document.getElementsByClassName("text");
    console.log(pList);

   // 2.1 Change the p2 color to red, and p2 to blue
   pList[0].style.color = "red";         
   pList[1].style.color = "blue"; 
}

function addItem(){
    let item = document.getElementById("itemValue").value;


//alert(input);
let list = document.getElementById("itemList");

list.innerHTML += ` <li> ${item} </li>`;
}



