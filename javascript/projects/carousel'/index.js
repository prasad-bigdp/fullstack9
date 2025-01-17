const carouselInner = document.querySelector('.carousel-inner')
const items = document.querySelectorAll('.carousel-item')
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button")
let activeItemIndex = 0;
function updateActiveItem ()
{
    items.forEach((it, ind) =>
    {
        it.classList.toggle("active", ind === activeItemIndex)
    })
}
function prevLogic ()
{
    if (activeItemIndex == 0)
    {
        activeItemIndex = items.length - 1;
    }
    else
    {
        activeItemIndex--
    }
    updateActiveItem()
}
function nextLogic ()
{
     if (activeItemIndex == items.length-1) {
				activeItemIndex = 0
			} else {
				activeItemIndex++
    } 
    updateActiveItem()
}