const express = require('express')
const pokemon = require('./models/pokemon.js')

const port = 3000
const app = express()

app.get('/',(req,res)=>{
    res.send`<h1>Welcome To the Pokemon App!! Hooray!!</h1>`
})

app.get('/pokemon', (req,res)=>{
    res.send(pokemon)
})


app.listen(port,()=>{
    console.log('Im running')
})