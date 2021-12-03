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

