const db = require('../models')

async function seed() {
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'The creater of this page is so handsome! very nice... oh also the restaurant is nice too'
    })

    place.comments.push(comment.id)
    
 
    process.exit()
}

seed()