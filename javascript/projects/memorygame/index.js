const mainDiv = document.getElementById("memory-game");

let cards = [
	{
		id: 1,
		image: "./logos/js.webp",
	},
	{
		id: 2,
		image: "./logos/nodejs.png",
	},
	{
		id: 3,
		image: "./logos/nodejs.png",
	},
	{
		id: 4,
		image: "./logos/react.png",
	},
	{
		id: 5,
		image: "./logos/js.webp",
	},
	{
		id: 6,
		image: "./logos/react.png",
	},
	{
		id: 7,
		image: "./logos/java.webp",
	},
	{
		id: 8,
		image: "./logos/java.webp",
	},
]
let flippedCards = [];
let matches = 0;

// create divs
function createCard (id, image)
{
    const card = document.createElement('div');
    card.classList.add('card')
    const cardFront = document.createElement("div");
    cardFront.textContent='😂'
    const cardBack = document.createElement("div")
    cardBack.style.backgroundImage = `url(${image})`;
    card.append(cardFront,cardBack)
    card.addEventListener('click', () =>
    {
        flipCards(card, id);
    })
    return card;
}

cards.forEach((c) =>
{
    mainDiv.appendChild(createCard(c.id,c.image))
})

function flipCards (card,id)
{
    if (flippedCards.length < 2)
    {
        card.classList.add("flip");
        flippedCards.push({ card, id })
    }
}







