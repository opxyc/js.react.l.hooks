import React, { useContext } from 'react'

import { CountContext } from '../../App'

function ComponentA() {
    const c = useContext(CountContext)
    return (
        <div>
            Component A : {c.countState} &emsp;
            <button onClick={()=>c.countDispatch('increment')}>Increment</button>
        </div>
    )
}

export default ComponentA
