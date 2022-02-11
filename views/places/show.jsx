const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
          No comments yet!
        </h3>
      )
    let rating = (
        <h3 className="inactive">
          Not yet rated
        </h3>
      )
      let sumRatings

      if (data.place.comments.length) {
        sumRatings = data.place.comments.reduce((tot, c) => {
            console.log('tot, c.stars', tot, c.stars)
          return tot + c.stars
        }, 0)

        console.log('sumRatings', sumRatings)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        console.log('average', averageRating)

        let stars = ''
        for (let i = 0; i < averageRating; i++) {
          stars += '🌟'
          console.log('stars', stars)
        }
        rating = (
          <h3>
            {stars} Stars
          </h3>
        )
        comments = data.place.comments.map(c => {
            return (
                <div key={c.id} className="border">
                    <h2 className="rant">{c.rant ? 'Rant! 🤬' : 'Rave! 🥰'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars} </h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                    <div className="content">
                        <div className="row1">
                            <h1>{data.place.name}</h1>
                        </div>
                        <div className="row gx-2 justify-content-center">
                            <div className="col-md-6">
                            <img src={data.place.pic} label="cuisine pic" className="img-thumbnail"/>
                            <p>Located in {data.place.city}, {data.place.state}.</p>
                            </div>
                            <div className="col-md-6">
                            <h3 className="bg-info">Review</h3>
                            {rating}
                            <p><h3>{data.place.showEstablished()}</h3></p> 
                            <h4>Famous for {data.place.cuisines} !</h4>
                            </div>
                        </div>
                        <div className="row3">
                            <h3 className="bg-info">Comments</h3>
                            {comments}                            
                        </div>


                        
                        <h4 className="bg-info">Add your own comment!</h4>
                        <form action={`/places/${data.place.id}/comment`} method="POST">
                            <div className="form-group row">
                                <label  className="col-sm-2 col-form-label">Name: </label>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" id="author" name="author" placeholder="Jane Doe"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" htmlFor="stars">Rating: </label>
                                <div className="col-md-8">
                                    <input type="range" step="0.5" min="1" max="5" name="stars" id="stars" className="form-control"/>   
                                </div>
                            </div>
                            <div className="form-group row">
                             <label  className="col-sm-2 col-form-label" htmlFor="rant">Is this a rant? </label>
                             <div className="col-sm-1">
                                <div className="form-check">
                                    <input type="checkbox" id="rant" name="rant" />
                                </div>
                             </div>
                            </div>
                            <div className="form-group row">
                                <label  className="col-sm-2 col-form-label">Comment: </label>
                                <div className="col-md-8">
                                    <textarea className="form-control" id="content" name="content" rows="3" placeholder="I love this place! ..."></textarea>   
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                        {/* EDIT */}
                        <div>
                        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                        Edit
                        </a>   
                        {/* DELETE */}
                        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                        <button type="submit" className="btn btn-danger">
                        Delete
                        </button>
                        </form> 
                        </div>
                    </div>
            </main>
        </Def>
    )
}

module.exports = show