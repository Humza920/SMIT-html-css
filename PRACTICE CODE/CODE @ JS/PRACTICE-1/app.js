// for(let i=1 ; i<=10 ; i++){
//     console.log(`5*${i}=${5*i}`);
//     for(let j=1 ; j<=10 ; j++){
//         console.log(`20*${j}=${20*j}`);
//     }
// }


// for(let i=1 ; i<=100 ; i++){
//     console.log(i
//         );
//     for(let j=1 ; j<=10 ; j++)
//     console.log(`${i} * ${j} = ${i*j}`);
// }

const arr =['apple' , 'banana' , 'orange' , 'grapes']
const ul =document.querySelector("ul")
function ME() {

    //    FOR LOOP

    // for(let i = 0 ; i<arr.length ; i++){
    //     ul.innerHTML+=`<li>${arr[i]}</li>`
    //     }

// WHILE LOOP

// ul.innerHTML=""
//     let i = 0
//     while (i<arr.length) {
//         ul.innerHTML+=`<li>${arr[i]}</li>`
//         i++
//     }

// DO WHILE LOOP

let i =0
do {
    console.log(i);
    ul.innerHTML+=`<li>${arr.length}</li>`i++
} while (i<10);
}