# React Hooks and Query
### Rules of Hooks
- **Only Call Hooks at the Top Level**

    Don't call inside loops, conditions, or nested functions

- **Only Call Hooks from React Functions**

    Call them from within React functional components and not just any regular JavaScript function

### Notes:
#### useState
- The useSate hook lets you add state to functional components
- In classes, the state is always an object
- With the useSate hook, the state doesn't have to be an object; a state variable can be a string, number, boolean, object or an array
- The useState hook returns an array with 2 elements
- The first element is the current value of the state and the second is a state setter functions
- New state value depends on the previous state value? You can pass a function to the setter function
- When dealing with objects or arrays, always make sure to sperad your state variable and then call the setter function

#### useEffect
- The effect hook lets you perform side effects in functionsl components
- It is a close replacement for componentDidMount, componentDidUpdate and componentWillUnmount

#### useContent
- Context provides a way to pass data through the component tree without having to pass props down manually at every level
- useContext hook makes the consumption of the context value simpler (while keeping the first 2 steps - creation of content and passing it to children - the same)

#### useReducer
- useReducer is a hook that is used for state management
- it is similar to useState
- [newState, dispatch] = userReducer(reducer, initialState)
- reducer(currentState, action)

| reduce in JavaScript | useReducer in React |
| --- | --- |
| `array.reduce(reducer, initialValue)` | `userReducer(reducer, initialState)` |
| `singleValue = reducer(accumulator, itemValue)` | `newState = reducer(currentState, action)`. The `action` determines the change from currentState to new state. |
| `reduce` method returns a single value | `useReducer` returns a pair of values - `[newState, dispatch]` |

#### useReducer with useContent
- useReducer - local state management
- useContezt - for sharing parent content
- if we cant to share state between components, we can combine useReducer and useContent

| Scenario | useState | useReducer |
| --- | --- | --- |
| Type of state | Number, String, Boolean | Object or Array |
| Number of state transitions | One or two | Too many |
| Related state transitions? | No | Yes |
| Business Logic | No business logic | Complex business logic |
| Local vs global | Local | Global |

#### useCallback
- useCallback is a hook that will return a memorized version of the callback function that only changes if one of the dependancies has changed
- it is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders