import React from 'react'

const Card = ({recipe}) => {
  return (
    <div className='card'>
        <h4>{recipe.title}</h4>
        <img src={recipe.image} alt="" className='card-img'/>
        <button>Ver detalle</button>
    </div>

  )
}

export default Card