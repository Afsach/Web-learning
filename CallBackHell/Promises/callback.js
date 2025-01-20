
const heading = document.querySelector("h1");
console.log(heading);

// let changeColor = function (color, delay, nextChange) {
//     setTimeout(() => {
//         heading.style.color = color
//         if(nextChange) nextChange()
//     }, delay)

// }

// changeColor('orange', 1000, ()=>{
//     changeColor('pink', 2000, ()=>{
//         changeColor('green',3000, ()=>{
//             changeColor('blue', 4000)
//         })
//     })
// });


//same code with promise
//while converting the callback hell to promise its not required to give callback as argument
//because promise itself has two callback arguments that is resolve and reject
let changeColor = function(color, delay){
    return new Promise((resolve, reject)=>{
        if(delay){
            setTimeout(()=>{
                heading.style.color = color;
                resolve(console.log("color changed to : ", color))
            },delay)
        }else{
            reject("delay property is not sent while calling the promise funtion")
        }
        
    })
}

changeColor('orange', 1000)
.then((res)=>{
    console.log(res)
    return changeColor('blue', 1000)
})
.then((res)=>{
    console.log(res)
    return changeColor("green", 5000)
})
.then((res)=>{
    console.log(res)
    return changeColor('red',2000)
})
.then((res)=>{
    console.log(res)
})
.catch((rej)=>{
    console.log(rej)
})


    
// setTimeout(()=>{
//     heading.style.color = "red";
// },1000)

// setTimeout(()=>{
//     heading.style.color = "blue";
// },2000)

// setTimeout(()=>{
//     heading.style.color = "orange";
// },3000)

// changeColor('yellow', 2000);
// changeColor('blue', 3000);