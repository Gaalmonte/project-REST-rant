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