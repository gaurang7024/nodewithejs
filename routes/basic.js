const express = require('express');
const blogRoute = express.Router();

blogRoute.get('/', (req,res)=>
{
    console.log("Welcome to Blog /");
    let posts = [{
        id: 1,
        postTitle : "Here is Test",
        postTime : new Date(),
    },{
        id: 2,
        postTitle : "Here is Test",
        postTime : new Date(),
    }
    ];
    res.json({welcome : "Welcome to Blogs", posts : posts});
})

blogRoute.post('/post/:id', (req,res)=>
{
    console.log(req.params.id);
    console.log(req.query.section);
    console.log(req.body.coooler);
    res.json({welcome : "We got datas"});
});
module.exports = {blogRoute};