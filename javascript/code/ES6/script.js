//let and const
// var a = 10;
// var a = 20;
// let b = 20;
// b = 30;
// const x = 20;

//template literals
// let n = "Prasad";
// console.log(`The name is ${n}`)

//function vs function expression vs arrow
// function sum (a,b)
// {
//     return a + b;
// }
// let x1 = sum(4, 3)
// console.log(x1)
// function expression
// const sum=function (a, b) {
// 	return a + b
// }
// let x1 = sum(4, 3)
// console.log(x1)
// arrow function
// const sum=(a, b) =>a + b
// let x1 = sum(4, 3)
// console.log(x1)

// function fun (a,b=7)
// {
//     console.log(a+b)
// }
// fun(3)

// function fun (a, ...b)
// {
//     console.log(a, b)
//     let x = [a, b]
//      let y = [a, ...b]
//     console.log(x,y)
// }
// fun(5,1,2,3,4)


// destructuring
//array
let arr1 = [5, 4, 3, 2, 1,8]
//let x= arr[1]
let [a, b, c, d, e] = arr1;
// swap two number in js
let x = 20, y = 10;
[x,y]=[y,x]
console.log(x)
//object
let obj = {
    name: "prasad",
    age:28
}
let {age,name}= obj
console.log(age,name,obj.age)


function fun ()
{
    console.log("I'm from script file")
}
//named export
export { fun, age, name }
//default export
export default arr1;



