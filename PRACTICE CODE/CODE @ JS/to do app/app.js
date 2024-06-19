// const ul = document.querySelector("ul")
// const fruits = ['BANANA','APPLE','STRAWBERRRY','GRAPES']
// for(i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
//     ul.innerHTML+=(`<p>${fruits[i]}</p>`)
// }

const todo = document.querySelector("#todo")
const ul = document.querySelector("ul")
const arr = []
function addTodo() {
    arr.push(todo.value)
    todo.value=""
    
    console.log(arr);
    
      todo.value=""
    for(i=0;i<arr.length;i++){
        ul.innerHTML+=(`<li>${arr[i]}</li> <button onclick="todoDelete()">DELETE</button>
         <button onclick="todoEdit()">EDIT</button>`)
    }
}

function todoDelete() {
    
}

function todoEdit() {
    
}