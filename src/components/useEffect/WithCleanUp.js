import React, {useState, useEffect} from 'react'
import HookMouse from './HookMouse'

function WithCleanUp() {
    const [display, setDisplay] = useState(false)
    return (
        <div>
            <button onClick={()=>setDisplay(prev => !prev)}>toggle</button>
            { display && <HookMouse /> }
            {/* check HookMouse component to see how cleanup at unmount is done */}
        </div>
    )
}

export default WithCleanUp
