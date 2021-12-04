import {useContext} from 'react'
import {UserContent, ChannelContent} from './ComponentA'

function ComponentC() {
    // 3. get the content value using hook
    const user = useContext(UserContent)
    const channel = useContext(ChannelContent)
    return(
        <div>
            This is Component C, getting context of grand parent ComponentA
            <br/>
            User: {user}, Channel: {channel}
        </div>
    )
}

export default ComponentC