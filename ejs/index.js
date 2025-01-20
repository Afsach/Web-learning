const express = require("express");
const app = express();
const path = require("path")
const port = 3000;
const instaAnimals = require('./data.json')

// for reference 
// for(animal in instaAnimals){
//     console.log(instaAnimals[animal])
// }
// console.log(instaAnimals["cat"])

app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "/views"))


// app.get('/:username', (req, res)=>{
//     let {username} = req.params;
//     let followers = ['Adverd', 'Bella', 'Jacob', 'Renesme', 'Carlisle','Esme', 'Roslie', 'Emmet','Alice', 'Jasper', ];
//     res.render('home', {username, followers})
// })

app.get('/rolldice/', (req, res)=>{
    let diceNumber = Math.floor(Math.random()* 6 + 1);
    res.render('rolldice', {diceNumber})
})

app.get('/ig/:username', (req, res)=>{
    const {username } = req.params;
    const instaAnimals = require('./data.json')
    const data = instaAnimals[username]
    // console.log(data)
    // console.log(data.posts)
    // console.log(Array.isArray(data.posts) )
    res.render('instagram', {data})
})


app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})