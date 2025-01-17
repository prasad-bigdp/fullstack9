const input = document.getElementById('inp');
const mainDiv = document.getElementById('todos');
let todos = [];
let count = 0;
function addTodo ()
{
    let obj = {
        text: input.value,
        isCompleted:false
    }
    todos.push(obj);
    input.value=''
    displayData(todos)
}
function displayData (todos)
{
    mainDiv.textContent=''
    todos.forEach((t, i) =>
    {
        const ele = document.createElement('li');
        ele.classList.add('listItem')
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        
        const task = document.createElement('p');
        task.textContent = t.text;
        checkbox.onchange = function () {
            if (t.isCompleted == false)
            {
                task.classList.add('strike')
                t.isCompleted = true;
                count++;
                document.getElementById('val').textContent=count
            }
            else
            {
                task.classList.remove("strike")
                t.isCompleted = false;
                count--;
				document.getElementById("val").textContent = count
            }
				}
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "delete";
        deleteButton.onclick = function ()
        {
            todos.splice(i, 1);
            displayData(todos)
        }
        ele.append(checkbox,task, deleteButton);
        mainDiv.appendChild(ele)
    })
}