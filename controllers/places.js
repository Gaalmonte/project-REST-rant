const router = require('express').Router()
const places = require('../models/places.js')

// GET PLACES/NEW
router.get('/new', (req,res)=>{
  res.render('places/new')
})

// GET /PLACES
router.get('/', (req, res) => {
  res.render('places/index', {places})
})

//GET SHOW
router.get('/:id', (req,res) =>{
  res.render('places/show')
  if (isNaN(id)){
    res.render('error404')
  }
  else if(!places[id]){
    res.render('places.show', {place: places[id]})
  }
  else{
    res.render('places/show')
  }
})

// POST PLACES
router.post('/', (req, res) => {
  if (!req.body.pic){
    // Default image
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city){
    req.body.city = 'San Francisco'
  }
  if (!req.body.state){
    req.body.state= 'CA'
  }
  places.push(req.body)
  res.redirect('/places')
})

module.exports = router