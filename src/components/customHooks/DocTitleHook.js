import React, { useState } from 'react'
import useDocumentTitle from './hooks/useDocumentTitle'

function DocTitleHook() {
    const [count, setCount] = useState(0)

    // custom hook
    useDocumentTitle(count)

    return (
        <div>
            <button onClick={()=>setCount(prev => prev+1)}>Count - {count}</button>
        </div>
    )
}

export default DocTitleHook
