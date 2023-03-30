import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecipeStates } from '../Context/RecipeContext'

const RecipeDetail = () => {
    const params = useParams()
    const [recipeSelected, setRecipeSelected] = useState({})
    const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=68d481a0fbc340308fbf934f836ee8c6`
    let recipefav = localStorage.getItem('recipe')
    let parsedFav = JSON.parse(recipefav)
    
    useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(data => setRecipeSelected(data))
    },[])

    const addRecipe = () => {
      console.log(recipeSelected)
      localStorage.setItem('recipe', JSON.stringify(recipeSelected))
    }
    const showFav = () => {
      console.log(JSON.parse(recipefav))
    }
  return (
    <div>
        <h2>{recipeSelected.title}</h2>
        <img src={recipeSelected.image} alt="" />
        <h4>{recipeSelected.instructions}</h4>
        <button onClick={addRecipe}>Agregar receta a ⭐</button>
        <button onClick={showFav}>Mostrar fav</button>
    </div>
  )
}

export default RecipeDetail