import React from 'react'

function CocktailItem({image, name, ingredients}) {
    return (
        <div className="cocktailItem">
            <div style={{backgroundImage: `url(${image})`}}> </div>
                <h1> {name} </h1>
                <p> {ingredients} </p>
        </div>
    )
}

export default CocktailItem