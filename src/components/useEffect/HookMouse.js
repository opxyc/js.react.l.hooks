import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("useEffect called")
        window.addEventListener("mousemove", logMousePosition)
    },[])
    // useEffect runs after every render (state change) if dependany array is not mentioned
    // if deps === [], it will execute only on component mount

    return (
        <div>
            
        </div>
    )
}

export default HookMouse
