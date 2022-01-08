const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
  let places = [{
    name: 'Food Restaurant 1',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic:'/images/food1.jpg'
  }, {
    name: 'Food Restaurant 2',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/food2.jpg'
  }]
  res.render('places/index', {places})
})

module.exports = router