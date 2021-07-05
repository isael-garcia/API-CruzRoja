const path = require('path');
const express = require('express')
//inicializacion
const app = express()
//settings
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))

//Middlewares
app.use(express.urlencoded({extended:false}))


//Global Variables

//routes
app.get('/', (req, res) =>{
    res.send('hello world')
})
//Static files
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app;