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
app.set(express.static(path.join(__dirname, 'public')));

//default rout
app.get('/', (req, res)=>{
    res.send("everything setup properly");
})



//starting the server on defined port
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})