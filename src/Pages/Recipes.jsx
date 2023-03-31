import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
import { useRecipeStates } from '../Context/RecipeContext'


const Recipes = () => {
  const {recipes} = useRecipeStates()

  return (
    <>
      <h2>Lista de recetas random</h2>
      <div className='list-container'>
          {recipes.map(recipe => <Link key={recipe.id} to={'/recipe/' + recipe.id}><Card  recipe={recipe}/></Link>)}
      </div>
    </>
  )
}

export default Recipes