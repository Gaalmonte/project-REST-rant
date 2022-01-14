const React = require('react')
const Def = require('../default')

function show (data) {
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
                            <p className="bg-info">Review</p>
                            <p><h3>{data.place.showEstablished()}</h3></p> 
                            <h4>Famous for {data.place.cuisines} !</h4>
                            </div>
                        </div>
                        <div className="row3">
                            <p className="bg-info">Comment Section</p>
                            <p>No comments yet!</p>
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