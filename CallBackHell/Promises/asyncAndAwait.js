
//asynct funtion will always return a promise
//that is why we can apply promise methods(.then() and .catch() ) while calling that async funtion
//if we return something or not
//but if we return something from the asynct function it will store in PromiseResult

//async function without return keyword
// const hello = async ()=>{
//     console.log("this is a async arrow funtion")
// }

// const helloPromise = hello()
// console.log(helloPromise)

//async function with return keyword
// const returnHello = async function(){
//     return "async function returning somthing"
// }

// const Hello = returnHello();
// console.log(Hello)

//ChangeColor using async and await
let head = document.querySelector('h1');
const changeColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            randNumber = Math.floor(Math.random() * 5);
            if (randNumber < 2){
                reject("Promise Rejected")
            }
            head.style.color = color;
            console.log(color)
            resolve("color changed");   
        }, delay)

    })
}

//await is used to execute the function according to the delay mention in changeColor()
//await is wait for the first function to execute after that second and so on
//if we call async funtion inside the same funtion it will give RangeError: Maximum call stack size exceeded
//if called at the begining
//if called at the end it will loop all the function calls infite times 
//if called at middle it will loop all the functions of before its call (with await keyword)
//if called at middle it will loop all the functions of after its call (without await keyword)
async function changingColor() {
    try{
    await changeColor('blue', 1000);
    await changeColor('orange', 1000);
    await changeColor('red', 1000);
    await changeColor('green', 1000);
    await changeColor('purple', 1000);
    }catch(err){
        console.log(err)
    }
    
}


