import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ChildComponent from './Clase 19/ChildComponent'
import Context from './Clase 19/Context'
import LoboEstepario from './Clase 19/LoboEstepario'
import ParentComponent from './Clase 19/ParentComponent'
import Deserts from './Components/Deserts'
import LoginForm from './Components/LoginForm'
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

  // const [recipes, setRecipes] = useState([])
  // const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=68d481a0fbc340308fbf934f836ee8c6'
  
  // useEffect(() => {
  //     fetch(url)
  //     .then(res => res.json())
  //     .then(data => setRecipes(data.recipes))
  // }, [])
  
  // console.log(recipes)

  return (
    <div className="App">
      <ParentComponent/>
      <LoboEstepario />
      {/* <Navbar/>
      <Routes>
        <Route path={routes.home} element={<Home/>}>
          <Route path={routes.vegetarians} element={<Vegetarians/>}>
            <Route path={routes.veggies} element={<Veggie/>}/>
          </Route>
          <Route path={routes.deserts} element={<Deserts/>}/>
        </Route>
        <Route path={routes.ingredients} element={<Ingredients/>}/>
        <Route path={routes.recipes} element={<Recipes recipes={recipes}/>}/>
        <Route path={routes.recipe} element={<RecipeDetail recipes={recipes}/>}/>
        <Route path={routes.contact} element={<Contact/>}/>
        <Route path={routes.about} element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes> */}
    </div> 
  )
}

export default App
