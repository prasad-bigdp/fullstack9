// let c = document.getElementById('count')
// let count = 10;
// function myFun2 ()
// {
//      count--
// 	c.textContent = count
// }
// function myFun ()
// {
//     document.getElementById('greeting').textContent="Bye"
// }
// setTimeout(myFun, 5000)
// let myInterval=setInterval(myFun2, 1000)
// document.getElementById('btn').addEventListener('click', function ()
// {
//     clearInterval(myInterval)
// })
// let count = document.getElementById('count');
// let c = 10;
// let x= setInterval(function ()
// {
//     c--;
//     count.textContent = c;
//     if (c == 0)
//     {
//         clearInterval(x)
//     }
// },1000)

// document.getElementById("btn").addEventListener('click', function ()
// {
//     clearInterval(x)
// })

// function fun ()
// {
//     console.log("hello world")
// }
// setTimeout(fun, 1);
// for (let i = 0; i < 1000; i++)
// {
//     console.log("bye world")
// }
// for (let i = 0; i < 1000; i++) {
// 	console.log("bye world2")
// }
// for (let i = 0; i < 1000; i++) {
// 	console.log("bye world3")
// }


let c = document.getElementById('clock')
function displayClock ()
{
    let dt = new Date()
    console.log(dt.toLocaleTimeString())
    c.textContent = dt.toLocaleTimeString()
}
setInterval(displayClock,1000)















