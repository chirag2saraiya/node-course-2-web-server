const express = require ('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('getCurrentYear',()=>{
return new Date().getFullYear();

});

app.get('/',(req,res) => {
//res.send('<h1>Hello Express</h1>');
res.render('home.hbs',{
text:'Home Page',
});
});

app.get('/about',(req,res)=>{
res.render('about.hbs',{
text:'About page',
});
});

app.get('/projects',(req,res)=>{
res.render('projects.hbs',{
  text:'projects Home',
});
});

app.listen(port, () =>{
console.log(`Server is up on port ${port}`);
});
