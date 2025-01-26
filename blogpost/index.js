const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');     // package for generating unique id
const port = 3000;

//for parsing the url for post request
app.use(express.urlencoded({extended : true}));
app.use(express.json());

//setting the view engine to ejs 
app.set('view engine', 'ejs');

//setting the views folder path
app.set('views', path.join(__dirname, 'views'));

//setting static public folder to accessible in views folder
app.use(express.static(path.join(__dirname, 'public')))

//default rout
let posts = [
    {
        id : uuidv4(),
        username : "Bellswan",
        description : "Got the job in very big MNC"
    },
    {
        id : uuidv4(),
        username : "AdverdCullen",
        description : "Promoted a manager in google to solution architect"
    },
    {
        id : uuidv4(),
        username : "JacobBlack",
        description : "Got placed in Amazon as SDE2 with 78Lac CTC"
    }
]
app.get('/posts', (req, res)=>{
    res.render("index.ejs", {posts});
})

app.get('/posts/new', (req, res)=>{
    res.render('new.ejs');
})

app.get('/posts/:id', (req, res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("showpost.ejs", {post});

})

app.post('/posts', (req, res)=>{
    let {username, description} = req.body;
    let id = uuidv4();
    // console.log(req.body)
    posts.push({id ,username, description});
    // res.render("index.ejs", {posts}); // optional way
    res.redirect('/posts')  // conventional way
})







//starting the server on defined port
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})