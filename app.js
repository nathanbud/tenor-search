//Require Libraries
const express = require('express');
const exphbs = require('express-handlebars');

//App Setup
const app = express();

//Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Routes
app.get('/', (req, res) =>{
    console.log(req.query)
    res.render('home');
   
   // const gifUrl = 'https://media1.tenor.com/images/561c988433b8d71d378c9ccb4b719b6c/tenor.gif?itemid=10058245'
    
    //res.send('Hello World');
});

app.get('/greetings/:name', (req, res)=>{
    const name = req.params.name;
    res.render('greetings', {name});
})

//Start Server


app.listen(3000, () => {
    console.log('Gif Search listing on port localhost:3000!')
});

