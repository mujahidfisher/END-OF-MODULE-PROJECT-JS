// get empty array.
function outputData() {
    let key;
    if(localStorage.getItem("key") == null) {
        key = [];
    }else {
        key = JSON.parse(localStorage.getItem("key"))
    }

    let displayItems = document.querySelector("#display-items");

    displayItems.innerHTML = "";
    // fill empty array with the table.

    key.forEach((item) => {
        displayItems.innerHTML = `
        <tr>
        <td>${item.id}</td>
        <td>${item.product}</td>
        <td>${item.specs}</td>
        <td><img src="${item.img}" alt="product" class= "prodpic"></td>
        <td>R${item.price}</td>
        <td><button>EDIT</button><button id= "remove-items">DELETE</button></td>
        </tr>`;
    });
    
}



// filling the table with values from the input.
function addItem() {
    let id = document.querySelector("#id").value;
    let product = document.querySelector("#product").value;
    let specs = document.querySelector("#specs").value;
    let img = document.querySelector("#img").value;
    let price = document.querySelector("#price").value;
    
    // passing the same array to the localstorage 
    
    let key;
    if(localStorage.getItem("key") == null) {
        key = [];
    }else {
        key = JSON.parse(localStorage.getItem("key"))
    }
    
    // pushing these variables to the array 
    key.push({
        id: id,  
        product: product,
        specs: specs,
        img: img,
        price: price
    })
    localStorage.setItem("key", JSON.stringify(key));
    outputData();
    
    // clearing the inputs
    id = document.querySelector("#id").value = "";
    product = document.querySelector("#product").value = "";
    specs = document.querySelector("#specs").value = "";
    img = document.querySelector("#img").value = "";
    price = document.querySelector("#price").value = "";
}
document.onload = outputData();