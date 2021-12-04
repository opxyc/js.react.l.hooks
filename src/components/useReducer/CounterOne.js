import React, {useReducer} from 'react'

const initialState = 0
const reducer = (currentState, action) => {
    switch(action) {
        case 'increment':
            return currentState + 1
        case 'decrement':
            return currentState - 1
        case 'reset':
            return initialState
        default:
            return currentState
    }
}

function CounterOne() {
    // useReducer takes a reducer function and initialState
    // and returns a state variable and dispatch method - which can be used
    // to dispatch actions, which the reducer function can use to create 
    // a new state
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne
