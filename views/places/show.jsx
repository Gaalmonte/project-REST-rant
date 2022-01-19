const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            Empty, no comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
        Not yet rated
        </h3>
    )
     if (data.place.comments.length) {
            let sumRatings = data.place.comments.reduce((tot, c) => {
              return tot + c.stars
            }, 0)
            let averageRating = Math.round(sumRatings / data.place.comments.length)
            let stars = ''
            for (let i = 0; i < averageRating; i++){
            rating += '🌟'

            }
            console.log('stars2')
            rating = (
              <h3>
                {stars} stars
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
                                <label className="col-sm-2 col-form-label">Rating: </label>
                                <div className="col-md-8">
                                    <input type="range" step="0.5" min="1" max="5" name="stars" id="stars" className="form-control"/>   
                                </div>
                            </div>
                            <div className="form-group row">
                             <label  className="col-sm-2 col-form-label">Is this a rant? </label>
                             <div className="col-sm-1">
                                <div className="form-check">
                                    <input type="checkbox" id="rant" name="rant" className="form-control" />
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
                        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                        Edit
                        </a>   
                        {/* DELETE */}
                        <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
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