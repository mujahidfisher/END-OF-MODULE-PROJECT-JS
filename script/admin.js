let key;
// get empty array.
function outputData() {
    let key;
    if (localStorage.getItem("key")==null) {
    key = [];
} else {
    key = JSON.parse(localStorage.getItem("key"));
  }
  
  let displayItems = document.querySelector("#display-items");
  
  displayItems.innerHTML = "";
  
  // fill empty array with the table.
  key.forEach((item) => {
      displayItems.innerHTML += `
      <tr>
      <td>${item.id}</td>
      <td>${item.product}</td>
      <td>${item.specs}</td>
      <td><img src="${item.img}" alt="product" class= "prodpic" loading="lazy"></td>
      <td>R${item.price}</td>
      <td><button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="edit">Edit</button><button class="deleter" id= "remove-items" onclick='deleteItem(${JSON.stringify(item)})'>DELETE</button></td>
      </tr>`;
    });
}

document.onload = outputData();

// filling the table with values from the input.
function addItem() {
    let id = document.querySelector("#id").value;
    let product = document.querySelector("#product").value;
    let specs = document.querySelector("#specs").value;
    let img = document.querySelector("#img").value;
    let price = document.querySelector("#price").value;
    let key;
  // passing the same array to the localstorage
  if (localStorage.getItem("key") == null) {
      key = [];
    } else {
        key = JSON.parse(localStorage.getItem("key"));
    }
    
    // pushing these variables to the array
    key.push({
        id: id,
        product: product,
        specs: specs,
        img: img,
        price: price,
    });
    
  localStorage.setItem("key", JSON.stringify(key));
  outputData();
  
  // clearing the inputs
  id = document.querySelector("#id").value = "";
  product = document.querySelector("#product").value = "";
  specs = document.querySelector("#specs").value = "";
  img = document.querySelector("#img").value = "";
  price = document.querySelector("#price").value = "";
  
}



// editing function 

// delete function 
function deleteItem(item){
  let data = JSON.parse(localStorage.getItem('key'))
  let x = data.findIndex((y) => {
      return y.id === item.id
  })

  data.splice(x, 1)
  localStorage.setItem("key", JSON.stringify(data))
  outputData()
}

// adding data to the modal
function EditItem(item){
    this.id = item.id
    this.product = document.querySelector(`${item.product}`).value;
    this.spec = document.querySelector("#new-spec").value;
    this.img = document.querySelector('#new-img').value;
    this.price = document.querySelector('#new-price').value;

    let itemIndex = data.findIndex((data)=>{
        return data.id === item.id
    })
    data[itemIndex] = {id: this.id, product: this.product, specs: this.specs, img: this.img, price: this.price};
    outputData()
    location.reload()
}

// sorting outputs out by first letter of the product name
// let sortItem = document.querySelector("#sort");
// sortItem.addEventListener("click", (e)=> {
//     e.preventDefault()
//     item.sort(function(a, b){return a - b})
// })


