import React, { useReducer } from 'react'

const initialState = {count: 0}

const reducer = (state, action) => {
    switch (action.type) {
        case 'incrementar':
            return {count: state.count + 1}
        case 'decrementar':
            return {count: state.count - 1}
        case 'reset':
            return {count: action.payload}
        case 'random':
            return {count: action.payload}
        default:
            throw new Error
    }
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <button onClick={()=> dispatch({type: 'decrementar'})}>-</button>
        <h1>{state.count}</h1>
        <button onClick={()=> dispatch({type: 'incrementar'})}>+</button>
        <br />
        <button onClick={()=> dispatch({type: 'reset', payload: initialState.count})}>Reset</button>
        <button onClick={()=> dispatch({type: 'random', payload: 42})}>Número 42</button>
    </div>
  )
}

export default Counter