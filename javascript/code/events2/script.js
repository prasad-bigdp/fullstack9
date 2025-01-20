// document.getElementById('btn').addEventListener('click', function ()
// {
//     alert("btn clicked")
// },true)













document.getElementById("c").addEventListener("click", function (e)
{
    //e.stopPropagation()
	alert(e.target.textContent)
})






















// document.getElementById("p").addEventListener("click", function (e)
// {
//    // e.stopPropagation()
// 	alert("parent clicked")
// },true)
// document.getElementById("gp").addEventListener("click", function () {
// 	alert("grand parent clicked")
// },true)