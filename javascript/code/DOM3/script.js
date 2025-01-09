const mainDiv = document.getElementById("box")
// for (let i = 1; i <= 100; i++)
// {
//     const myDiv = document.createElement("div")
// 		myDiv.classList.add("divv")
// 		const para = document.createElement("p") //<p></p>
// 		para.textContent = "I'm Prasad" //<p>I'm Prasad</p>
// 		/* create an image element give src alt and append into html */
// 		const image = document.createElement("img")
// 		image.src =
// 			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSSS81DNgGAwRQrPZ_DcPeYVNQb6_cN-0Vg&s"
// 		image.alt = "shinchan"
// 		myDiv.append(image, para)
// 		mainDiv.appendChild(myDiv)
// }
const cartoons = [
	{
		title: "Steven Universe",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+2",
	},
	{
		title: "Futurama",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+79",
	},
	{
		title: "The Flintstones",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+85",
	},
	{
		title: "The Lion King",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+90",
	},
	{
		title: "Zootopia",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+79",
	},
	{
		title: "Alice in Wonderland",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+30",
	},
	{
		title: "Toy Story",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+90",
	},
	{
		title: "Courage the Cowardly Dog",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+33",
	},
	{
		title: "Peppa Pig",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+39",
	},
	{
		title: "VeggieTales",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+15",
	},
	{
		title: "LazyTown",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+88",
	},
	{
		title: "Johnny Bravo",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+27",
	},
	{
		title: "Dragon Tales",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+100",
	},
	{
		title: "Lady and the Tramp",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+20",
	},
	{
		title: "Peter Pan",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+16",
	},
	{
		title: "Chota Bheem",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+100",
	},
	{
		title: "Pokemon",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+69",
	},
	{
		title: "VeggieTales",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+43",
	},
	{
		title: "Family Guy",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+38",
	},
	{
		title: "LazyTown",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+99",
	},
	{
		title: "Kim Possible",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+99",
	},
	{
		title: "Mulan",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+8",
	},
	{
		title: "Cinderella",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+73",
	},
	{
		title: "Goofy",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+88",
	},
	{
		title: "Thomas & Friends",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+35",
	},
	{
		title: "Chota Bheem",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+59",
	},
	{
		title: "Cinderella",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+71",
	},
	{
		title: "The Rescuers",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+52",
	},
	{
		title: "Sleeping Beauty",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+94",
	},
	{
		title: "Mulan",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+48",
	},
	{
		title: "Adventure Time",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+72",
	},
	{
		title: "Adventure Time",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+41",
	},
	{
		title: "Tarzan",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+70",
	},
	{
		title: "Tom and Jerry",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+32",
	},
	{
		title: "Family Guy",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+77",
	},
	{
		title: "Dumbo",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+35",
	},
	{
		title: "Adventure Time",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+63",
	},
	{
		title: "Pinocchio",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+72",
	},
	{
		title: "Alice in Wonderland",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+87",
	},
	{
		title: "SpongeBob SquarePants",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+18",
	},
	{
		title: "Cars",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+41",
	},
	{
		title: "Lady and the Tramp",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+70",
	},
	{
		title: "Dragon Tales",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+5",
	},
	{
		title: "Alice in Wonderland",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+75",
	},
	{
		title: "Bugs Bunny",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+39",
	},
	{
		title: "The Powerpuff Girls",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+30",
	},
	{
		title: "Goofy",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+17",
	},
	{
		title: "Tarzan",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+4",
	},
	{
		title: "Ben 10",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+80",
	},
	{
		title: "DuckTales",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+54",
	},
	{
		title: "Darkwing Duck",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+57",
	},
	{
		title: "Dragon Tales",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+100",
	},
	{
		title: "TailSpin",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+47",
	},
	{
		title: "The Hunchback of Notre Dame",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+19",
	},
	{
		title: "Dexter's Laboratory",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+22",
	},
	{
		title: "Inside Out",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+57",
	},
	{
		title: "Shinchan",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+11",
	},
	{
		title: "The Backyardigans",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+59",
	},
	{
		title: "The Little Mermaid",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+8",
	},
	{
		title: "Looney Tunes",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+62",
	},
	{
		title: "Pocahontas",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+69",
	},
	{
		title: "Clifford the Big Red Dog",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+55",
	},
	{
		title: "The Flintstones",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+51",
	},
	{
		title: "Chip 'n Dale",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+48",
	},
	{
		title: "Handy Manny",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+71",
	},
	{
		title: "The Backyardigans",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+95",
	},
	{
		title: "Oswald",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+86",
	},
	{
		title: "TailSpin",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+36",
	},
	{
		title: "The Little Mermaid",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+49",
	},
	{
		title: "Toy Story",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+71",
	},
	{
		title: "Bambi",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+46",
	},
	{
		title: "Charlie and Lola",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+18",
	},
	{
		title: "Fantasia",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+42",
	},
	{
		title: "Curious George",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+59",
	},
	{
		title: "Peppa Pig",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+69",
	},
	{
		title: "Avatar: The Last Airbender",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+4",
	},
	{
		title: "Tarzan",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+9",
	},
	{
		title: "The Jungle Book",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+1",
	},
	{
		title: "101 Dalmatians",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+74",
	},
	{
		title: "Curious George",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+70",
	},
	{
		title: "Frozen",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+20",
	},
	{
		title: "Frozen",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+92",
	},
	{
		title: "Teen Titans",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+76",
	},
	{
		title: "Dragon Tales",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+96",
	},
	{
		title: "Angelina Ballerina",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+76",
	},
	{
		title: "Pocahontas",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+1",
	},
	{
		title: "Kim Possible",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+99",
	},
	{
		title: "Finding Nemo",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+78",
	},
	{
		title: "Futurama",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+22",
	},
	{
		title: "Curious George",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+74",
	},
	{
		title: "Pokemon",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+40",
	},
	{
		title: "Big Hero 6",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+93",
	},
	{
		title: "Dragon Ball Z",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+49",
	},
	{
		title: "Adventure Time",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+1",
	},
	{
		title: "Hercules",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+11",
	},
	{
		title: "Frozen",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+9",
	},
	{
		title: "Regular Show",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+42",
	},
	{
		title: "Dragon Tales",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+25",
	},
	{
		title: "The Jungle Book",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+68",
	},
	{
		title: "Thomas & Friends",
		imageLink: "https://dummyimage.com/600x400/000/fff&text=Cartoon+2",
	},
]
function displayData ()
{
    cartoons.forEach((val) =>
    {
        const cartoonDiv = document.createElement('div');
        cartoonDiv.classList.add('cartoon');
        const cartoonImg = document.createElement('img');
        cartoonImg.src = val.imageLink;
        cartoonImg.alt = val.title;
        const cartoonPara = document.createElement('p');
        cartoonPara.textContent = val.title;
        cartoonDiv.append(cartoonImg, cartoonPara);
        mainDiv.appendChild(cartoonDiv)
    })
}
displayData()