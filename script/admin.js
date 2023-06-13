let allItems = []
let addBtn = document.querySelector("#added")
let displayItems = document.querySelector("#display-items")


addBtn.addEventListener("click", (e) => {
    let newId = document.querySelector("#input-id").value
    allItems.push(newId)
    
    let newName = document.querySelector("#input-product").value
    allItems.push(newName)
    
    let newSpecs = document.querySelector("#input-specs").value
    allItems.push(newSpecs)
    
    let newImg = document.querySelector("#url-img")
    allItems.push(newImg)
    
    let newPrice = document.querySelector("#pricing")
    allItems.push(newPrice)
    console.log(allItems);

    allItems.forEach(function(e){
        displayItems.innerHTML = `<tr>
        <td>${newId}</td>
        <td>${newName}</td>
        <td>${newSpecs}</td>
        <td><img src="${newImg}" alt="product"></td>
        <td>R${newPrice}</td>
        <td><button>EDIT</button><button>DELETE</button></td>
      </tr>`
    })
})
