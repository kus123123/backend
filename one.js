
require('dotenv').config()
const express  = require('express')
const app =express()
const port = 3000


app.get('/',(req,res) => {
    res.send('hello world')

});

app.get('/twitter',(req,res) => {
    res.send('kushagra746@gmail.com')
});

app.get('/login',(req,res) => {
    res.send ('<h1>kindly login</h1>')
})

app.get('/youtube',(req,res) => {
    res.send ('<h1>youtube</h1>')
})

app.listen(process.env.port,() => {
    console.log(`example app listening on ${port}`)
});



