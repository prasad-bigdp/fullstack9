let obj = {
    name: "prasad",
    age:25,
}
console.log(console)
/* create an object user with email and password as properties*/
let user = {
    email: "lcharanya123@gmail.com",
    password: 23
}
let user1 = {
	email: "lcharanya123@gmail.com",
	password: 23,
}
console.log(user.email)
// to get object values
console.log(obj.age) //25 - dot notation
console.log(obj['age'])//25 - index signature

// object can be copied into other objects
let x = user //deep copy
const users = [
    {
        name:"prasad",
		email: "labc@gmail.com",
		password: 26,
	},
    {
        name:"shekhar",
		email: "lbcd@gmail.com",
		password: 45,
	},
    {
        name:"supraja",
		email: "lccd@gmail.com",
		password: 23,
	},
]
// print all emails in console
users.forEach(function (ele)
{
    console.log(ele.email)
})

//WAP to add 55 at thend of all password and return tht password values

let x2= users.map(function (ele) {
   return ele.password+"55"
})
console.log(x)

// wap to print in console with name "prasad"

let x4 = users.filter(function (ele)
{
    return ele.name=="prasad"
})
console.log(x4[0].password)

/*  create a dummy array movies, with objects having properties
name,year,collectionInCr */
let movies = [
	{
		name: "RRR",
		year: 2023,
        collectionInCr: 600,
        
	},
	{
		name: "Titanic",
		year: 1998,
		collectionInCr: 60,
	},
	{
		name: "Pushpa2",
		year: 2024,
		collectionInCr: 600,
	},
]
/* print all movies names in console */
movies.forEach(function(ele){
    console.log(ele.name)
}
)

/* print only the movies released in 2024 */
let yr = movies.filter( (ele) => ele.year == 2024)
console.log(yr)

/* add each object a new property (status) which might be
"HIT" or "FLOP".
"HIT"--->collectionInCr > 100 */

movies.forEach((ele) =>
{
    if (ele.collectionInCr >= 100)
    {
        ele.status="HIT"
    }
    else
    {
        ele.status ="FLOP"
    }
})
console.log(movies)




