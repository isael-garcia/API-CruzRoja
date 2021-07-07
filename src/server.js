const path = require('path');
const express = require('express')
const exphbs = require('express-handlebars');
const morgan = require('morgan')
//inicializacion
const app = express()
//settings
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))
        //para mandar a llamar layouts
app.engine('.hbs', exphbs({
    //configurando las rutas de las carpetas donde van a estar las vistas con path join
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname:'.hbs' //extencion de los renders
}))
app.set('view engine', '.hbs')
//Middlewares
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))
//Global Variables

//routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/particulars.routes'))// ruta para agregar un nuevo paciente

//Static files
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app;