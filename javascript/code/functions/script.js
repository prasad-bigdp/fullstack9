function display ()
{
    console.log("hello world")
}
display()
display()
/* simple function to add two numbers and print result */
function add ()
{
    let a = 10, b = 20;
    console.log(a + b)
}
add();
/* functions with parameters/arguments */
function add(a,b) {
	console.log(a + b)
}
add(10, 20)
add(5, 3)
add(6, 7)
/* create a function sub which accepts two parameters and print its differnce */

function sub (a, b)
{
    console.log(a-b)
}
sub(5, 3)


/* function can default parameters */
function add2 (a, b=6, c=10)
{
    console.log(a + b + c)
}
add2(5, 5);

/* function that have multiple parameters */
function add3 (...b)
{
	console.log(b)
	let c = [10, 11, ...b,8] //[10,11,5,4,3,2,1,8]
	console.log(c.length)
}
add3(5, 4, 3, 2, 1)

/* functions can return the values */
function add4 (a, b)
{
    return a + b;
}
let x= add4(5,10)
console.log(x)

/* IN JS, functions are also treated as variables. we can declare functions like variable */
/* function expression*/
let a = function (a, b) { return a + b }
let y = a(5, 10)
console.log(x)

/* we have a approach to write function expressions called arrow functions */
let a1 = (a, b) =>a + b
let y1 = a1(5, 10)
console.log(y1)



/* rest and spread */
function names (...users)
{
	console.log(users) //["raj","shekhar","vani","swetha"],["raj"],["raj", "shekhar", "vani", "swetha","prasad"]
    console.log("Total users: " + users.length)
    let newUsers = ["admin", ...users]
    console.log(newUsers)
}
names("raj","shekhar","vani","swetha")
names("raj")
names("raj", "shekhar", "vani", "swetha", "prasad")

let x1 = function (a, b)
{
    console.log(a + b);
}
let x2 = (a, b) => console.log(a + b)



// callback functions
function fun1 ()
{
     console.log("fun1 called")
 }
function fun2 (x)
{
     x()
 }
fun2(fun1)
 

// function y1 ()
// {
//     console.log("Hi")
// }
// function y2 (x)
// {
//     x()
// 	console.log("Hi2")
// }
// function y3 (x)
// {
//     x(y1)
// 		console.log("Hi3")
// }
// y3(y2)

function letter ()
{
    console.log("secret letter")
}
let receiver = (x) => x()   
receiver(letter)

function outer ()
{
    let c = 0;
    function inner ()
    {
        c++;
        console.log(c)
    }
    return inner;
}
let z = outer();
console.log(z)
z() //1
z() //2












// currying
function fun1 (x)
{
    function fun2 (y)
    {
        return x*y
    }
    return fun2
}
let z1 = fun1(5)
console.log(z1)
z1(6);
z1(5);
z1(4)
z1(3);



























































