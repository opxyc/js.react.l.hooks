import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstName: '', lastName: ''})
    // a state variable can be a string, number, boolean, object or an array
    return (
        <div>
            <input type="text" value={name.firstName} onChange={e=> setName({ ...name, firstName: e.target.value })} />
            <input type="text" value={name.lastName} onChange={e=> setName({ ...name,lastName: e.target.value })} />
            <h2>firstname: {name.firstName}</h2>
            <h2>secondname: {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default HookCounterThree
