import React, {useContext} from 'react'

import { CountContext } from '../../App'

function ComponentCEF() {
    const c = useContext(CountContext)
    return (
        <div>
            Component CEF (child of C.E): {c.countState} &emsp;
            <button onClick={()=>c.countDispatch('increment')}>Increment</button>
            <button onClick={()=>c.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>c.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentCEF
