let displayBody = document.querySelector("#display-items")
let checkoutBox = JSON.parse(localStorage.getItem("checkout")) ? JSON.parse(localStorage.getItem("checkout")) : []
let checkout;

// JSON.stringify(localStorage.getItem("checkout"))

    displayBody.innerHTML += 
    `
    <tr>
    <td>${checkout}</td>
    <td>${checkout}</td>   
    <td>${checkout}</td>
    <td>R ${checkout}</td>
    <td><button>remove</button></td>
    </tr>
    `





























// function displayCheckout() {
//     try{
//         if(!checkoutBox.length);
//         let total = 0;
//         for(let idx in groupBy){
//             let totalPrice = groupBy[idx].length * groupBy[idx][0].amount;  
//             total += totalPrice;
//             displayBody.innerHTML += `
//             <tr>
//             <td>${groupBy[idx][0].product}</td>
//             <td>${groupBy[idx][0].specs}</td>
//             <td>${groupBy[idx][0].length}</td>
//             <td>R ${totalPrice}</td>
//             <button>remove</button>
//             <td>
//             `  
//         }
//         displayBody.innerHTML += `
//                   <div class="cal-items">
//                   <h6>
//                       R${total}
//                   </h6>
//                   <h4 class="tot">
//                     Total Price:
//                   </h4>
//                   <p>price</p>
//         `
//     }catch(y){
//         console.log(y);
//     }
// }


