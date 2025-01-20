const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

//for parsing the url for post request
app.use(express.urlencoded({extended : true}));
app.use(express.json());

//setting the view engine to ejs 
app.set('view engine', 'ejs');

//setting the views folder path
app.set('views', path.join(__dirname, 'views'));

//setting static public folder to accessible in views folder
app.use(express.static(path.join(__dirname, 'public')));

//default rout
let posts = [
    {
        username : "Bellswan",
        description : "Got the job in very big MNC"
    },
    {
        username : "AdverdCullen",
        description : "Promoted a manager in google to solution architect"
    },
    {
        username : "JacobBlack",
        description : "Got placed in Amazon as SDE2 with 78Lac CTC"
    }
]
app.get('/posts', (req, res)=>{
    res.render("index.ejs", {posts});
})



//starting the server on defined port
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})