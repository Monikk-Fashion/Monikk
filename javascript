fetch("posts.json")

.then(res => res.json())

.then(data => {

let container = document.getElementById("products")

data.forEach(item => {

let card = document.createElement("div")

card.className = "product"

card.innerHTML = `

<img src="${item.image}">

<h3>${item.name}</h3>

<p>${item.price}</p>

<a href="${item.link}" class="buy">Buy Now</a>

`

container.appendChild(card)

})

})



document.getElementById("newsletterForm").addEventListener("submit",function(e){

e.preventDefault()

alert("You are now subscribed!")

})
