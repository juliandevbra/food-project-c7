import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecipeStates } from '../Context/RecipeContext'

const RecipeDetail = () => {
    const {recipes} = useRecipeStates()
    const params = useParams()

    const recipeSelected = recipes.find((recipe) => params.id == recipe.id)
    console.log(recipeSelected)
  return (
    <div>
        <h2>{recipeSelected.title}</h2>
        <img src={recipeSelected.image} alt="" />
        <h4>{recipeSelected.instructions}</h4>
    </div>
  )
}

export default RecipeDetail