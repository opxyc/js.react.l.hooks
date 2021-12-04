import './App.css'
import React, { useContext, useReducer } from 'react';
import ComponentA from './components/useReducer+useContext/ComponentA'
import ComponentB from './components/useReducer+useContext/ComponentB'
import ComponentC from './components/useReducer+useContext/ComponentC'

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch(action) {
      case 'increment':
          return state + 1
      case 'decrement':
          return state - 1
      case 'reset':
          return initialState
      default:
          return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}

export default App;
