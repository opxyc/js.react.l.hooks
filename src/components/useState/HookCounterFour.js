import React, {useState} from 'react'

function HookCounterFour() {
    const [items, setItems] = useState([])
    
    const addItem = () => {
        setItems(prev => [...prev, {
            id: prev.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {
                    items.map(item=>(
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
            <div>{JSON.stringify(items)}</div>
        </div>
    )
}

export default HookCounterFour
