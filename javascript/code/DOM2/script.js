const btn = document.getElementById('btn')
const inpEle = document.getElementById('inp');
const count = document.getElementById('count');
function change ()
{
    document.body.classList.toggle('dark');
    if (btn.textContent == "Dark")
    {
        btn.textContent="light"
    }
    else
    {
                btn.textContent = "Dark"
    }
}
function display ()
{
    console.log(inpEle.value.length)
    if (inpEle.value.length > 100)
    {
        alert("maximum limit reached");
        inpEle.readOnly = "true"
    }
    else
    {
        count.textContent = inpEle.value.length
    }
}