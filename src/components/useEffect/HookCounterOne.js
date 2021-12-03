import React, {useState, useEffect} from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
    // useEffect runs after every render (state change)

    return (
        <div>
            <button onClick={()=>setCount(p => p + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne
