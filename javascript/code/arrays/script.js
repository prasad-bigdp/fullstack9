let arr = [5, 4, 3, 8];
console.log(arr);
console.log(arr[4]) //undefined
arr[4] = 20;
console.log(arr[4])//20
console.log(arr);
arr[10] = 15;
console.log(arr)
console.log(typeof arr)

arr = [5, 4, 3, 7, 9,3];
console.log(arr.length)
// arr.length = 3;
// console.log(arr)
// let arr2 = [[5, 30], [6, 8], [11, 10]]
// console.log(arr2);
console.log(arr.indexOf(3),arr.lastIndexOf(3),arr[3])
let y = arr.concat([11, 12, 13])
console.log(y)
arr = [1, 2];
let arr2 = [1, 2]
console.log(arr == arr2);

arr = [1, 5, 4];
// push
arr.push(6) // [1, 5, 4, 6]
arr.push(10,11,12,13,14,15) //[1, 5, 4, 6,10,11,12,13,14,15 ]
console.log(arr)//[1, 5, 4, 6,10,11,12,13,14,15 ]
arr.pop()
arr.shift()
console.log(arr)//[5, 4, 6,10,11,12,13,14]
arr.unshift(14,15)
console.log(arr)//[14,15 , 5, 4, 6,10,11,12,13,14]
arr = [1, 2, 3, 4]
arr.splice(2,1,5,8,9)
console.log(arr)//1 2 5 8 9 4

let friends = ["penny", "chandler", "ross", "rachel", "monica", "sheldon"]
// 1. remove penny and add pheobe
//2. remove sheldon and add joey
//3. between ross and rachel add justin


arr = [1, 2, 4, 6]
arr.forEach(function (ele,ind)
{
   console.log(ele,ind) 
})
friends = ["penny", "chandler", "ross", "rachel", "monica", "sheldon"]
/* print first letters of all values in above array */
friends.forEach(function(ele)
{
console.log(ele[0])
})
let x = friends.forEach(function (ele)
{
    return ele.length
})
console.log(x) // undefined -- forEach cannot return any value
let x1 = friends.map(function (ele) {
	return ele.length
})
console.log(x1) //[5,8,4,6,6,7]
// map will return for every element of the array
arr = [5,4,3, 2, 1]
let z = arr.map((ele) => ele % 2 == 0)
console.log(z)
let z1 = arr.filter((ele) => ele % 2 == 0)
console.log(z1)

let z2 = arr.some((ele) => ele > 3)
console.log(z2)

let z3 = arr.every((ele) => ele>3)
console.log(z3)

let z4 = arr.find((ele) => ele % 2 == 0)
console.log(z4)

/* reduce */
arr = [-5,-3,-1,-2,-6,-7]
let res = arr.reduce((prev,ele) =>
{
    return prev+ele
},0)
let max = arr.reduce((prev,ele) =>
{
    return Math.max(prev,ele)
},-Infinity)
// arr = [[1, 2], [3, 4], [5, 6]];
// let z6 = arr.reduce(function(prev,ele)
// {
//    return prev.push(...ele)
// },[])

friends = ["penny", "chandler", "ross", "rachel", "monica", "sheldon"]
let x5= friends.sort() // bubble sort
console.log(x5)
arr= [5,4,11,1,44]
console.log(arr.sort())

arr = [5, 4, 11, 1, 44]
console.log(arr.reverse())


















