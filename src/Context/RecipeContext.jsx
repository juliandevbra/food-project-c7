import {createContext, useContext, useState, useEffect} from 'react'

const RecipeStates = createContext()

const Context = ({children}) => {
    const [recipes, setRecipes] = useState([])
    const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=68d481a0fbc340308fbf934f836ee8c6'

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setRecipes(data.recipes))
    }, [])

    return(
        <RecipeStates.Provider value={{recipes, setRecipes}}>
            {children}
        </RecipeStates.Provider>
    )
}
export default Context

export const useRecipeStates = () => useContext(RecipeStates)




