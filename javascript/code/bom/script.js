// users location

window.navigator.geolocation.getCurrentPosition((coord) =>
{
 console.log(coord.coords.latitude,coord.coords.longitude)   
}, (err)=>{
    console.log(err)
})

// video and audio
document.getElementById("btn").addEventListener('click',copyText )
function getVideoAudio ()
{

    window.navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((res) =>
        {
          document.getElementById('vd').srcObject = res
        })
    .catch ((err)=>
    {
        console.log(err)
    })
}
// sharePost
function sharePost ()
{
    window.navigator
			.share({ title: "share the post", text: "hello world" })
			.then(() => console.log("shared successfully"))
			.catch(() => console.log("Error"))
}

// copy paste
function copyText ()
{
    window.navigator.clipboard
			.writeText("hello world")
			.then(() => console.log("text is copied"))
			.catch(() => console.log(err))
}

// storage -- browsers can store some data
// browsers can store data as localStorage, session storage, cache
let arr = [5, 4, 3, 2, 1];
console.log(JSON.stringify(arr))
window.localStorage.setItem("myArr", JSON.stringify(arr))
console.log(JSON.parse(window.localStorage.getItem("myArr")))
// difference between session storage and local storage is session storage will be deleted once u close the browser but localstorage don't
















