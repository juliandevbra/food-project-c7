import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Counter from './Clase 21/Counter'
import UserList from './Clase 21/UserList'
import Deserts from './Components/Deserts'
import LoginForm from './Components/LoginForm'
import Navbar from './Components/Navbar'
import RecipeDetail from './Components/RecipeDetail'
import Vegetarians from './Components/Vegetarians'
import Veggie from './Components/Veggie'
import { useRecipeStates } from './Context/RecipeContext'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Ingredients from './Pages/Ingredients'
import NotFound from './Pages/NotFound'
import Recipes from './Pages/Recipes'
import { routes } from './routes'

function App() {
  const {token} = useRecipeStates()
  return (
    <div className="App">
      {/* <Counter/> */}
      <UserList/>
     {/* {!token ? null : <Navbar/>} 
      <Routes>
        {!token
        ? 
          <Route path='/' element={<LoginForm/>}/>
          :
          <>
            <Route path={routes.home} element={<Home/>}>
              <Route path={routes.vegetarians} element={<Vegetarians/>}>
                <Route path={routes.veggies} element={<Veggie/>}/>
              </Route>
              <Route path={routes.deserts} element={<Deserts/>}/>
            </Route>
            <Route path={routes.ingredients} element={<Ingredients/>}/>
            <Route path={routes.recipes} element={<Recipes />}/>
            <Route path={routes.recipe} element={<RecipeDetail />}/>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={routes.about} element={<About/>}/>
            <Route path='*' element={<NotFound/>}/>
          </>
        }
        
      </Routes> */}
    </div> 
  )
}

export default App
