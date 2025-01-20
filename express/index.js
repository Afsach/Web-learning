const express = require('express');

const app = express();
const port = 3000;


// parse post request which comes in urlencoded form
app.use(express.urlencoded({extended : true}));
app.use(express.json())
// app.get('/:username/:id', (req, res)=> {
//      // we cannot send multple response for the same path
//      let {username , id} = req.params;
//      res.send(`welcome to the page of @${username} and id = ${id}`);
// })

//req : to post somethings
//res : to get something


// app.get('/search', (req, res)=> {
//     let {fruit, color} = req.query;
//     if(!fruit){
//         res.send(`nothing searched`)
//     }
//     res.send(`search result for : ${fruit} of ${color} color`)
// })

app.get('/register', (req, res)=>{
    let {username, password} = req.query;
    res.send(`welocome @${username} your password is '${password}' using get request`);
    
})

app.post('/register', (req, res)=>{
    let {username, password} = req.body;
    // res.send(`welocome @${username} your password is '${password}' using post request`);
    console.log(req.body)

})

app.listen(port, ()=>{
    console.log(`express app listening on ${port}`);
    
})