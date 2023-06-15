let checkoutBox = JSON.parse(localStorage.getItem("checkout"))
  ? JSON.parse(localStorage.getItem("checkout"))
  : [];
let displayBody = document.querySelector("#display-items");
let removeItem = document.querySelector("#clear");
let totalDisplay = document.querySelector("#totPrice")
let numb3 = document.querySelector("#pricing")

let totalPrice = 0

checkoutBox.forEach((item)=>{
    totalPrice += parseFloat(item.price.split(' ').reduce((accum, curren)=>
    accum + curren.price))
})
console.log(totalPrice);


checkoutBox.forEach((item) => {
  displayBody.innerHTML += `
    <tr>
    <td>${item.product}</td>
    <td>${item.specs}</td>  
    <td>${item}</td>
    <td>R${item.price}</td>
    </tr>
    `;
});

totalDisplay.innerHTML += `
<tr>
  <td></td>
  <td></td>  
  <td>Total Price:</td>
  <td>R${totalPrice}.00</td>
  </tr>
`
numb3.innerHTML += `
<p>R ${totalPrice}.00</p>
`


removeItem.addEventListener("click", () => {
  localStorage.removeItem("checkout");
  location.reload();
});



