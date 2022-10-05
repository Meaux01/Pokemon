const express = require('express')
const port = 3000
const app = express()

app.get('/',(req,res)=>{
    res.send`<h1>Welcome To the Pokemon App!! Hooray!!</h1>`
})




app.listen(port,()=>{
    console.log('Im running')
})