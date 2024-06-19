// var me = +prompt("ENTER YOUR AGE")
// if (me>18 && me<24) {
//     console.log("YOU ARE ELIGIBLE");
// }
    
//  else {
//     console.log("YOU ARE NOT ELIGIBLE");   
// }s

// let num1 = +prompt("ENTER YOUR NUM1") 
// let num2 = +prompt("ENTER YOUR NUM2") 

// let add = num1 + num2

// if (add<=100) {
//     console.log("YOU ARE ELIGIBLE");
// } else {
//     console.log("YOU ARE NOT ELIGIBLE")
// }

// function call() {
    
// }


let input = document.querySelector("input")
const arr =["Karachi","Lahore","Islamabad","Multan"]

function call() {
    if (arr.includes(input.value)) {
 console.log("AVAILABLE HAI");
    } else {
        console.log("AVAILABLE NHI HAI");
    }
    input.value=" "
}