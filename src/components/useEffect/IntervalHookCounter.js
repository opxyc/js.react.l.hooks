import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        // setCount(prev => prev + 1)
        setCount(count + 1) // this will also work since we have added
                            // count in the dependancy list
                            // if it was not mentioned, use prevState to alter the state
    }

    useEffect(() => {
        const interval = setInterval(tick, 500)

        // clear the interval on component unmount to avoid leak
        return () => {
            clearInterval(interval)
        }
    }, [count])

    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}

export default IntervalHookCounter
