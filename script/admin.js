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
      <td>

      <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="edit">Edit</button>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <div class="modal-body">
              <input type="number" value = "${item.id}" placeholder="Enter ID" id="id"/>
              <input type="text" value = "${item.product}" placeholder="Enter Product Name" id="product"/>
              <input type="text" value = "${item.specs}" placeholder="Enter Specs" id="specs"/>
              <input type="text" value = "${item.img}" placeholder="Enter img-url" id="img" />
              <input type="number" value = "${item.price}" placeholder="Enter Price" id="price" />
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-outline-warning" data-bs-dismiss="modal" onclick= "EditItem()">Save</button>
          </div>
        </div>
      </div>
    </div>
      

      <button class="deleter" id= "remove-items" onclick='deleteItem(${JSON.stringify(item)})'>DELETE</button></td>
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
let data = JSON.parse(localStorage.getItem('key'))
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

// Edit function
function EditItem(item){
    this.Id = item.id
    console.log(item.id);
    this.product = document.querySelector("#product").value;
    this.spec = document.querySelector("#spec").value;
    this.img = document.querySelector("#img").value;
    this.price = document.querySelector("#price").value;
    
    let itemIndex = key.findIndex((data)=>{
        return data.id === item.id
    })
    
    data[itemIndex] = {
        id: this.id, 
        product: this.product, 
        specs: this.specs, 
        img: this.img, 
        price: this.price
    };
    localStorage.setItem("key", JSON.stringify(data))
    outputData()
    location.reload
}

// sorting by price
let sortItem = document.querySelector("#sort");
sortItem.addEventListener("click", (e)=> {
    data.sort((a, b) => 
    a.price - b.price)
    outputData()
})


