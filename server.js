const express = require('express')
const pokemon = require('./models/pokemon.js')

const port = 3000
const app = express()

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', function (req, res) {
    res.send(`<h1> Welcome to the Pokemon App</h1>`);
  });

app.get('/pokemon', function (req, res) {
    res.render('Index');
});

app.get("/pokemon/:id", (req, res) =>{
    const{id} = req.params
    res.render('Show',{pokemon:pokemon[id]})
})


app.listen(port,()=>{
    console.log('Im running')
})