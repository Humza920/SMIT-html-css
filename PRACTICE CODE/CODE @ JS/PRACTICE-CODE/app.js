const ul = document.querySelector("ul")
const arr =  [
    "apple",
    "banana",
    "orange",
    "grape",
    "strawberry",
    "kiwi",
    "watermelon",
    "pineapple",
    "mango",
    "peach",
    "pear",
    "plum",
    "cherry",
    "blueberry",
    "raspberry",
    "blackberry",
    "papaya",
    "lemon",
    "lime",
    "fig"
]

    ul.innerHTML=""  
    for (let i = 0; i < arr.length; i++) {
        ul.innerHTML+=`<li>${arr[i]} </br> 
         <button onclick="deleteTodo(${i})">DELETE  <span><i class="fa-solid fa-trash"></i></span></button></li>`
         function deleteTodo(change) {
            arr.splice(change,1)
         }
    }


