// let flag = 0;
// function fun ()
// {
//     if (flag==1)
//     {
//         document.body.style.backgroundColor = "white";
//         document.getElementById("image").src = "https://image.ibb.co/hoBxtm/light_bulb_off.png";
//         flag = 0;
//     }
//     else
//     {
//         document.body.style.backgroundColor = "black";
//         document.getElementById("image").src = "https://image.ibb.co/cBBaeR/light_bulb_on.png";
//         flag = 1;
//     }
// }
// // function fun2() {
// // 	document.body.style.backgroundColor = "white"
// // }
// document.getElementById('image').addEventListener('mouseover', fun);
// document.getElementById("image").addEventListener("mouseout", fun)
// // document.getElementById('btn').addEventListener('mouseover', fun);
// // document.getElementById("btn").addEventListener("mouseout", fun2)
// /* whenever i place mouse over button make body bg as black, if i remove, it's white */

// function fun (e)
// {
//     console.log(e.key)
//     if (e.key == "r")
//     {
//         document.body.style.backgroundColor="red"
//     }
//     else if(e.key=="y")
//     {
//         document.body.style.backgroundColor = "yellow"
//     }
// }
// document.addEventListener('keypress',fun)
document.addEventListener('scroll', function (e)
{
    console.log(e)
})











