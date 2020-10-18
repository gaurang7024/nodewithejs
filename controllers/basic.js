const welcome = (req,res)=>
{
    console.log("Welcome to /");
    res.json({welcome : "Welcome to Core of Code"});
}

module.exports = {welcome};