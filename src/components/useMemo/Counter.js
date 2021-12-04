import React, { useMemo, useState } from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    // useMemo invokes the provided function and caches it's result
    const isEven = useMemo(() => {
        let i = 0
        while(i<300000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{isEven? 'Even': 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count One - {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter
