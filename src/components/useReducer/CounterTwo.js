import React, {useReducer, useState} from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 0
}
const reducer = (currentState, action) => {
    switch(action.type) {
        case 'increment1':
            return { ...currentState, firstCounter: currentState.firstCounter + action.value }
        case 'decrement1':
            return { ...currentState, firstCounter: currentState.firstCounter - action.value }
        case 'increment2':
            return { ...currentState, secondCounter: currentState.secondCounter + action.value }
        case 'decrement2':
            return { ...currentState, secondCounter: currentState.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return currentState
    }
}

function CounterTwo() {
    // useReducer takes a reducer function and initialState
    // and returns a state variable and dispatch method - which can be used
    // to dispatch actions, which the reducer function can use to create 
    // a new state
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h2>First Counter {count.firstCounter}</h2>
            <button onClick={()=>dispatch({ type: 'increment1', value: 1})}>Increment 1</button>
            <button onClick={()=>dispatch({ type: 'decrement1', value: 1})}>Decrement 1</button>
            <button onClick={()=>dispatch({ type: 'reset'})}>Reset</button>

            <h2>Second Counter {count.secondCounter}</h2>
            <button onClick={()=>dispatch({ type: 'increment2', value: 5})}>Increment 5</button>
            <button onClick={()=>dispatch({ type: 'decrement2', value: 5})}>Decrement 5</button>
            <button onClick={()=>dispatch({ type: 'reset'})}>Reset</button>
        </div>
    )
}

export default CounterTwo
