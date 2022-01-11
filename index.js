// dependecies 
require('dotenv').config()
const express = require('express')
const app = express()

// Middlewear
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// Routes

app.use('/places', require('./controllers/places'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req,res) => {
    res.render('home')
})
app.get('*', (req,res) => {
    res.render('error404')
})
app.listen(process.env.PORT,() => {console.log('running on ', process.env.PORT)})