const express = require('express');
const app = express();
const path = require('path');
let ejs = require('ejs');
var expressLayouts = require('express-ejs-layouts');
const {blogRoute} = require("./routes/basic");
const {welcome} = require("./controllers/basic");
app.use(express.static('public'));
app.use(express.json());
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.get('/', welcome);


app.use('/temp', )

// app.use('/blogs', blogRoute);
// app.get('/about', (req,res)=>
// {
//     res.render('about');
// })
app.listen(80,()=>
{
    console.log("We are listening you! _Perfectly");
});