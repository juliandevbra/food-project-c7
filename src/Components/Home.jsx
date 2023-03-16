import React, { useEffect, useState } from 'react'

const Home = () => {
    const [recipes, setRecipes] = useState([])
    const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=68d481a0fbc340308fbf934f836ee8c6'
    
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setRecipes(data.recipes))
    }, [])
    
    console.log(recipes)

    return (
        <div>
            <h1>Home</h1>
            {recipes.map(recipe => (
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <img src={recipe.image} alt="" />
                </div>
            ))}
        </div>
    )
}

export default Home