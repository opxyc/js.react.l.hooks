import React, {useEffect, useRef} from 'react'

function FocusInput() {
    // create ref
    const inputRef = useRef()
    useEffect(()=>{
        // focus the input element using ref
        inputRef.current.focus()
    },[])
    return (
        <div>
            {/* use ref */}
            <input ref={inputRef} type="text" />
        </div>
    )
}

export default FocusInput
