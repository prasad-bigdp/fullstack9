async function fetchData (url)
{
    try
    {
        const res = await fetch(url);
        const data = await res.json();
        displayData(data.products)
    }
    catch(err)
    {
        console.log("error: "+err)
    }
}
fetchData("https://dummyjson.com/products")
const rightDiv= document.getElementById('right')
function displayData (data)
{
    console.log(data) 
    rightDiv.textContent=''
    //div-->img,title,price,button
    data.forEach((p) =>
    {
        const productDiv = document.createElement("div")
        productDiv.classList.add('product','card','m-3','p-3')
        const productImage = document.createElement("img")
        productImage.classList.add('card-img-top')
        productImage.src = p.thumbnail;
        productImage.alt = p.title;
        const productTitle = document.createElement("h2")
        productTitle.classList.add('card-title')
        productTitle.textContent = p.title;
        const productPrice = document.createElement("p")
        productPrice.textContent= "Price: ₹"+ p.price
        const addCartButton = document.createElement("button")
        addCartButton.textContent = "add to cart"
        addCartButton.addEventListener('click', function ()
        {
            updateCart(p);
        })
        addCartButton.classList.add('btn','btn-primary')
		productDiv.append(
					productImage,
					productTitle,
					productPrice,
					addCartButton,
        )
        				rightDiv.appendChild(productDiv)
    })
}
document.getElementById("left").addEventListener('click', function (e)
{
    console.log(e.target.textContent)
    fetchData(`https://dummyjson.com/products/category/${e.target.textContent}`)
})
const count = document.getElementById('count');
let cartArr=[]
function updateCart (pro)
{
    cartArr.push(pro)
    count.textContent = cartArr.length;
    localStorage.setItem('cartItems',JSON.stringify(cartArr))
}