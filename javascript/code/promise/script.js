//creating promise
// let c = 19;
// let p = new Promise((resolve,reject) =>
// {
//     setTimeout(() =>
//     {
//         c++;
//         if (c % 2 == 0)
//             resolve(c)
//         else
//             reject("odd numbers are not accepted")
//     },2000)
// })
// console.log(p)
// //using promise
// p
//     .then((res)=>console.log(res,p))
//     .catch((err)=>console.log(err))


//create promise
let p = new Promise((resolve, reject) =>
{
    resolve(20);  
})
// promise chaining
p 
    .then((response) => response * 2 )
    .then((res) => res * 2)
    .then((res)=>console.log(res))
    .catch((err) =>console.log(err))

// crete a promise which returns x value after 5 second and implement promise then, catch also









 