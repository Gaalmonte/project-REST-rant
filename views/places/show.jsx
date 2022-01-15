const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            Empty, no comments yet!
        </h3>
    )
    if (data.place.comments.length){
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! 🤬' : 'Rave! 🥰'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
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
                            <h3 className="bg-info">Comment Section</h3>
                            {comments}
                            
                        </div>
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