const express = require ('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials');

app.get('/',(req,res) => {
//res.send('<h1>Hello Express</h1>');
res.send({
name:'chirag',
likes: ['Bikes',
      'Track',
      'Movies'
]
});
});

app.get('/about',(req,res)=>{
res.render('about.hbs',{
text:'About page',
year: new Date().getFullYear()
});
});

app.listen(port, () =>{
console.log(`Server is up on port ${port}`);
});
