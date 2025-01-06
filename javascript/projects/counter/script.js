let c = 0;
const para = document.getElementById('count')
const counter = document.getElementById("counter")
function openBox ()
{
    counter.style.display="flex"
}
function closeBox ()
{
     counter.style.display = "none"
}
function incr ()
{
    c++;  
    // alert(para.textContent)
    para.innerHTML = `<b>${c}</b><img src="https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Sunglasses_cool_emoji_large.png?v=1571606093" height="50">`
    para.style.color = (c % 2 == 0) ? "green" : "red";
}
function decr ()
{
    c--;
     para.textContent = c
}
function reset ()
{
    c = 0;
     para.textContent = c
}