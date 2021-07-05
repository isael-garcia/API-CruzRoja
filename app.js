const mongoose = require('mongoose');
const { urlencoded } = require('express');
const express = require('express');
const app = express()

const mongo_url = 'mongodb://localhost/db'

const connectMongoDB = () => mongoose.connect(mongo_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true
})
//Docoding
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Geting Routes
app.get('/', (req, res) => {
    res.send('Hola mundo')
})
//Event Listener for Express, whith conection to db
connectMongoDB().then(()=>{
    app.listen(3000, () => {
        console.log('CRMN API listening on port 3000');
    })
})