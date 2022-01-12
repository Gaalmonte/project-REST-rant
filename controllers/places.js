const router = require('express').Router()
const { render } = require('express/lib/response');
const res = require('express/lib/response');
const places = require('../models/places.js')

// GET PLACES/NEW
router.get('/new', (req,res)=>{
  res.render('places/new')
});

//GET SHOW
router.get('/:id', (req,res) =>{
  let id = Number(req.params.id)
  if (isNaN(id)){
    res.render('error404');
  }
  else if(!places[id]){
    res.render('error404');
  }
  else{
    res.render('places/show', {place: places[id], id});
  }
});

//GET EDIT
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', {place: places[id], id })
  }
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