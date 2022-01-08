const React = require('react')
const Def = require('./default')

function error404(){
    return (
        <Def>
            <main>
                <h1> 404: PAGE NOT FOUND</h1>
                <p>Oops, sorry can't find this page!</p>
                <div>
                <img src="/images/dog.jpg" alt="dog with glasses" width="200px" height="200px"/>
                    <div>
                    Photo by <a href="https://unsplash.com/@jamie452?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jamie Street</a> on <a href="https://unsplash.com/s/photos/dog-with-glasses?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                
            </main>
        </Def>
    )
}

module.exports = error404