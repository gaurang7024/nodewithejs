const welcome = (req,res)=>
{
    console.log("Welcome to Temporary");
    res.render("welcome");
}
const about = (req,res)=>
{
    console.log("Welcome to about");
    res.render("about");
}const careers = (req,res)=>
{
    console.log("Welcome to Careers");
    res.render("careers");
}const contact = (req,res)=>
{
    console.log("Welcome to Contact");
    res.render("contact");
}