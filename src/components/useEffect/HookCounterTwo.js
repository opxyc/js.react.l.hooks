import React, {useState, useEffect} from 'react'

function HookCounterTwo() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    
    useEffect(() => {
        console.log("updating document title")
        document.title = `You clicked ${count} times`
    },[count]) // only if count is changed, execute the effect
    // useEffect runs after every render (state change) if dependany array is not mentioned

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={()=>setCount(p => p + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterTwo
