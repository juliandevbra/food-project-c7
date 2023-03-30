import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRecipeStates } from '../Context/RecipeContext'
import { routes } from '../routes'

const Navbar = () => {
  
    const {setAuth} = useRecipeStates()
    const navigate = useNavigate()

    const logout = () => {
      localStorage.removeItem('token')
      setAuth(true)
    }
  return (
    <div className='navbar'>
        <button onClick={() => navigate(-1)}>↩</button>
        <Link to={routes.home}><h3>Inicio</h3></Link>
        <Link to={routes.recipes}><h3>Recetas</h3></Link>
        <Link to={routes.ingredients}><h3>Ingredientes</h3></Link>
        <Link to={routes.contact}><h3>Contacto</h3></Link>
        <Link to={routes.about}><h3>Acerca de</h3></Link>
        <Link to='/vegetarianas'><h3>Vegetarianas</h3></Link>
        <Link to='/postres'><h3>Postres</h3></Link>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar