import axios from 'axios'
import React, {useState, useEffect} from 'react'

function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {
            setPost(res.data)
        })
        .catch(err => console.log(err))
    },[idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div>
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
            <button onClick={handleClick}>Get</button>
            <br/>
            {post.title}
        </div>
    )
}

export default DataFetching
