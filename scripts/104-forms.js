function Product(valueName, valuePrice, valueCategory){
    this.name = valueName;
    this.price = valuePrice;
    this.category = valueCategory;
}

function registerProduct(event){
    //Testing function and button connection
    //console.log("Connector");

    //Prevent refreshing the browser
    event.preventDefault();
    //console.log(event);

    // 1. Get the values
    let productName = document.getElementById("productName").value;
    let productPrice = document.getElementById("productPrice").value;
    let productCategory = document.getElementById("productCategory").value;

    // 2. Use the values
    // 2.1 Create the object
    let newProduct = new Product(productName, productPrice, productCategory);
console.log(newProduct);

displayCard(newProduct);

}

function displayCard(newProduct){
    
    //2.2 Display the prudct object in the browser (DOM anipulaton)
    const container = document.getElementById("productList");
    
    //Add the card to the containter
    
    container.innerHTML += `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
    ${newProduct.name}
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${newProduct.price}</li>
    <li class="list-group-item">${newProduct.category}</li>
    </ul>
    </div>
    `;
}


