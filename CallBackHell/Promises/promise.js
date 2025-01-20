const heading = document.querySelector('h1')

// using call back hell 
// const sendData = function (data, resolve, reject) {
//     const internetSpeed = Math.floor(Math.random() * 10 + 1);
//     if (internetSpeed > 5) {
//         resolve()
//         console.log(internetSpeed, "data sent successfully")
//     } else {
//         reject()
//         console.log(internetSpeed, "slow internet connectivity")
//     }
// }

// sendData("Table",
//     () => {
//         console.log("resolve : data 1 saved"),
//             sendData("data2",
//                 () => {
//                     console.log("resolve : data 2 saved")
//                     sendData("data3",
//                         () => {
//                             console.log("resolve : data 3 saved")
//                         },
//                         () => {
//                             console.log("reject : data3 is not saved")
//                         }
//                     )
//                 },
//                 () => {
//                     console.log("reject : data2 is not saved")
//                 }
//             )
//     },
//     () => {
//         console.log("rejct : data rejectd")
//     }
// )

const sentData = function (data) {
    return new Promise((resolve, reject) => {
        const internetSpeed = Math.floor(Math.random() * 5 + 1);
        if (internetSpeed > 3) {
            resolve(data)
        } else {
            reject("weak connection didn't saved")
        }
    })
}

// by storing the promise status in a request variable
//using it with try catch block
//catch block will only show the message it will not throw error in console if promise is rejected
// const request = sentData("data1");
// request.then(()=>{
//     console.log("promise fullfilled")
// }).catch(
//     ()=>{
//         console.log("promise rejected")
//     }
// )

//without storing the promise in any variable
//both then and catch will have a callback funtion to execute received from its Promise object
// sentData("data1").then(()=>{
//     console.log("resoved : data1 saved");
// }).catch(()=>{
//     console.log("reject : weak connection data is not saved")
// })

//Promise chaining
//for every rejected promise there will be a single catch block to print the reject message of Promise
// sentData("data1")
//   .then(()=>{
//     console.log("resolved : Promise 1")
//     return sentData("data2");
// }).then(()=>{
//     console.log("resolved : Promise 2")
//     return sentData("data3")
// }).then(()=>{
//     console.log("resolved : Promise 3")
// }).catch(()=>{
//     console.log("reject : weak connection data is not saved")
// })

//getting the res and rej parameter from Promise to print the result
sentData("data1")
  .then((res)=>{
    console.log("resolved : Promise 1", res)
    return sentData("data2");
}).then((res)=>{
    console.log("resolved : Promise 2", res)
    return sentData("data3")
}).then((res)=>{
    console.log("resolved : Promise 3", res)
}).catch((rej)=>{
    console.log(rej);
})