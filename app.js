//Require Libraries
const express = require('express');
const exphbs = require('express-handlebars');

// Require tenorjs near the top of the file
const Tenor = require("tenorjs").client({
    // Replace with your own key
    "Key": "96TMKDKHKAXY", // https://tenor.com/developer/keyregistration
    "Filter": "high", // "off", "low", "medium", "high", not case sensitive
    "Locale": "en_US", // Your locale here, case-sensitivity depends on input
});

app.use(express.static('public'));

//App Setup
const app = express();

//Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Routes
app.get('/', (req, res) =>{
   term =""
   if (req.query.term){
       term = req.query.term
   }
   Tenor.Search.Query(term, "10")
   .then(response => {
       // store the gifs we get back from the search
       const gifs = response;
       // pass the gifs as an object into the home page
       res.render('home', { gifs })
   }).catch(console.error);
 
   
});

app.get('/greetings/:name', (req, res)=>{
    const name = req.params.name;
    res.render('greetings', {name});
})

//Start Server


app.listen(3000, () => {
    console.log('Gif Search listing on port localhost:3000!')
});

