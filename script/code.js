let key = JSON.parse(localStorage.getItem("key")) ?
JSON.parse(localStorage.getItem("key")) : 
        localStorage.setItem("key", 
        JSON.stringify([
            {
            "id": 1,
            "product": "Xbox Series S",
            "specs": "Fully Digital Console, Custom 512GB NVMe SSD, 1440p Gaming Resolution, Auto Low Latency Mode, HDMI Variable Refresh Rate, 10GB GDDR6 RAM",
            "img": "../assets/images/XboxSeriesS.png",
            "price": "6,999.00"
            },
            {
            "id": 2,
            "product": "Xbox Series X",
            "specs": "1TB PCIe Gen 4 NVME SSD, True 4K & 60 FPS, up to 120 FPS, 120 frames per second, DirectX Raytracing, 4K UHD Blu-ray, Thousands of backwards compatible games, Stream 4K Ultra HD video on Netflix.",
            "img": "../assets/images/XboxSeiriesX.png",
            "price": "11,999.00"
            },
            {
            "id": 3,
            "product": "PlayStation®5",
            "specs": "Ultra-High Speed SSD, Ray Tracing, 4K-TV Gaming Up to 120fps with 120Hz output, HDR Technology, Haptic Feedback, Adaptive Triggers.",
            "img": "../assets/images/ps5.png",
            "price": "10,499.00"
            },
            {
            "id": 4,
            "product": "Asus ROG Strix GA15",
            "specs": "Windows 11 home, G15DK Tower desktop, 16GB RAM and 512GB SSD storage, AMD Ryzen 7 5800X processor, Nvidia GeForce RTX 3060 graphics, WiFi and Bluetooth.",
            "img": "https://i.postimg.cc/kMTFw1pg/hero.webp",
            "price": "28,999.00"
            },
            {
            "id": 5,
            "product": "ASUS ROG Flow X16",
            "specs": "Windows 11 home, 16-Inch QHD touch screen with stylus, 16GB RAM and 1TB SSD storage, AMD Ryzen 7 6800HS processor, Nvidia GeForce RTX 3050 Ti 4GB graphics, 4 Speaker system smart amp technology, Backlit chiclet keyboard RGB",
            "img": "../assets/images/asus laptoop.png",
            "price": "29,999.00"
            },
        ]
))

let itemCard = document.querySelector("#itemCard")

itemCard.innerHTML = ""

key.forEach((item) => {
    itemCard.innerHTML += `
    <div class="card" style="width: 17.9rem;">
    <img src="${item.img}" class="card-img-top" alt="product img" style="width: 14rem; height: 16rem;" loading= "lazy">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${item.product}</li>
    <li class="list-group-item">${item.specs}</li>
    <li class="list-group-item">R ${item.price}</li>
  </ul>
  <button class= "buy" onclick= 'checkoutItems(${JSON.stringify(item)})'>buy</button>
</div>
    `
});

let checkoutBox = []
function checkoutItems(item){
    checkoutBox.push(item)
    localStorage.setItem("checkout", JSON.stringify(checkoutBox))
}