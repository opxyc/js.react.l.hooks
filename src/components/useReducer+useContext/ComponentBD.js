import React, {useContext} from 'react'

import { CountContext } from '../../App'

function ComponentBD() {
    const c = useContext(CountContext)
    return (
        <div>
            Component BD (child of B) : {c.countState} &emsp;
            <button onClick={()=>c.countDispatch('increment')}>Increment</button>
            <button onClick={()=>c.countDispatch('decrement')}>Decrement</button>
        </div>
    )
}

export default ComponentBD
