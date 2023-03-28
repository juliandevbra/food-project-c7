import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Deserts from './Components/Deserts'
import Navbar from './Components/Navbar'
import RecipeDetail from './Components/RecipeDetail'
import Vegetarians from './Components/Vegetarians'
import Veggie from './Components/Veggie'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Ingredients from './Pages/Ingredients'
import NotFound from './Pages/NotFound'
import Recipes from './Pages/Recipes'
import { routes } from './routes'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
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
      </Routes>
    </div> 
  )
}

export default App
