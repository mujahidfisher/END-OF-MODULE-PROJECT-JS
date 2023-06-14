let key = JSON.parse(localStorage.getItem("key")) ?
JSON.parse(localStorage.getItem("key")) : 
        localStorage.setItem("key", 
        JSON.stringify([
            {
            "id": 1,
            "product": "Xbox S",
            "specs": "super strong media device",
            "img": "https://i.postimg.cc/7YpRHzMr/Xbox-Prizes-in-South-Africa.jpg",
            "price": 20000
            },
            {
            "id": 2,
            "product": "PS 5",
            "specs": "super console power your world",
            "img": "https://i.postimg.cc/Jn5ynjB6/ps5-pre-order-header.jpg",
            "price": 20000
            }
        ]
))

let itemCard = document.querySelector("#itemCard")
let checkoutBox = []

itemCard.innerHTML = ""


        
        


// key.forEach((item) => {
//     displayItems.innerHTML += `
//     <tr>
//     <td>${item.id}</td>
//     <td>${item.product}</td>
//     <td>${item.specs}</td>
//     <td><img src="${item.img}" alt="product" class= "prodpic" loading="lazy"></td>
//     <td>R${item.price}</td>
//     <td><button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="edit">Edit</button><button class="deleter" id= "remove-items" onclick='deleteItem(${JSON.stringify(item)})'>DELETE</button></td>
//     </tr>`;
//   });
//             [
//                 {
//                     "id": 1,
//                     "make": "Dell",
//                     "spec": "Latitude-E5450 i3 5th, HDD 1TB, RAM 16GB, Operating System Windows 11 Business",
//                     "amount": 25000.00,
//                     "image": "https://i.postimg.cc/65tcMqdc/Dell-Latitude-E5450-i3-5th-GEN-1-for-business-10000.jpg"
//                 },
//                 {
//                     "id": 2,
//                     "make": "Acer",
//                     "spec": "Extensa 15.6 inch, SSD 256GB, RAM 8GB, Operating System Windows 10 Home",
//                     "amount": 6240.00,
//                     "image": "https://i.postimg.cc/gJKtZmp1/Acer-Extensa-15-6-inch-256-GBSSd-8-GBRAM.png"
//                 },
//                 {
//                     "id": 3,
//                     "make": "Acer",
//                     "spec": "Travel Mate Intel Core i5, SSD 512GB, RAM 8GB, Operating System Windows 10 Pro",          
//                     "amount": 10000.00,
//                     "image": "https://i.postimg.cc/0j2WGF2j/Acer-Travel-Mate-Intel-Corei5-SSD512-8-GBRAM.png"
//                 },
//                 {
//                     "id": 4,
//                     "make": "Lenovo",
//                     "spec": "Idea Pad Intel Celeron, HDD 1TB, RAM 4GB, Operating System Windows 10 Home",
//                     "amount": 6350.00,
//                     "image": "https://i.postimg.cc/rwwdXLQg/Lenovo-IDea-Pad-1-TBHDD-4-GBRAM-6350.png"
//                 },
//                 {
//                     "id": 5,
//                     "make": "HP",
//                     "spec": "Elite Book Intel core i5, SSD 256GB, RAM 8GB, Operating System Windows 11",
//                     "amount": 25800.00,
//                     "image": "https://i.postimg.cc/7Y83v1PB/HPElite-Book-Intel-Core-i5-1135-G7-256-GBSSD-8-GB.png"
//                 }
//             ]
//         ))