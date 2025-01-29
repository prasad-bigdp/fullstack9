const cartItems = JSON.parse(localStorage.getItem("cartItems"))
const count = document.getElementById('count')
count.textContent = cartItems.length;
const mainDiv = document.getElementById('main')
function displayData ()
{
    mainDiv.textContent=''
    if (cartItems.length == 0)
    {
       mainDiv.textContent="No Items in the cart"
    }
    else
    {
         cartItems.forEach((p, i) => {
						const div = document.createElement("div")
						div.classList.add(
							"cartItem",
							"d-flex",
							"gap-5",
							"justify-content-between",
						)
						const image = document.createElement("img")
						image.src = p.thumbnail
						image.height = "80"
						const title = document.createElement("h2")
						title.textContent = p.title
						const price = document.createElement("p")
						price.textContent = "₹" + p.price
						const removeButton = document.createElement("btn")
						removeButton.textContent = "remove"
						removeButton.classList.add("btn", "btn-danger")
						removeButton.addEventListener("click", () => updateCartRemove(i))
						div.append(image, title, price, removeButton)
						mainDiv.appendChild(div)
					})  
   } 
}
displayData()
function updateCartRemove (ind)
{
    cartItems.splice(ind, 1);
    count.textContent = cartItems.length;
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    calculateTotal()
    displayData();
}
const calculateTotal = () =>
{
    const total = cartItems.reduce((prev, curr) => prev + curr.price, 0);
    document.getElementById('total').textContent= "₹"+total
}
calculateTotal()



