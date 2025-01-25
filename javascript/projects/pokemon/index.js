const input = document.getElementById('inp')
const button = document.getElementById('btn')
button.addEventListener("click", searchPokemon)
const maindiv = document.getElementById("main")
mypokeArr=[]
// function getPokemons ()
// {
//     fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
//         .then((res) => res.json())
//         .then((data) => { mypokeArr = data.results; displayData(data.results) })
//         .catch((err) => console.log(err))
// }
async function getPokemons() {
    try
    {
        const res= await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
	    const data= await res.json()	
	    mypokeArr = data.results
	    displayData(data.results)
    }
    catch (err)
    {
        console.log(err)
    }

}
getPokemons()
async function searchPokemon ()
{
    try
    {
        const res= await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
        const data = await res.json()
        displayData2(data);
    }
    catch (err)
    {
        console.log(err)
    }
    finally
    {
        console.log("hi")
    }

}
function displayData2 (pokemon)
{
    maindiv.textContent = '';
    const div = document.createElement('div');
    const image = document.createElement('img');
    image.src= pokemon.sprites.front_default
    const name = document.createElement('h2');
    name.textContent=pokemon.name
    const h = document.createElement('p');
    h.textContent="Height: " + pokemon.height
    const w = document.createElement("p")
    w.textContent="Weight: "+ pokemon.weight
    div.append(image, name, h, w)
    maindiv.appendChild(div)
}
function displayData (pokemons)
{
    console.log(pokemons)
    pokemons.forEach((p) =>
    {
        const div = document.createElement('div');
        div.textContent = p.name;
        div.classList.add('pokemon');
        maindiv.appendChild(div)
 })   
}