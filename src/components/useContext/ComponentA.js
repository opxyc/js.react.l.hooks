import React, {useContext} from 'react'
import ComponentB from './ComponentB'

// 1. create content
export const UserContent = React.createContext()
export const ChannelContent = React.createContext()

function ComponentA() {
    return(
        <div>
            {/* create a provider and pass value */}
            <UserContent.Provider value={'UserName'}>
                <ChannelContent.Provider value={'ChannelName'}>
                    <ComponentB />
                </ChannelContent.Provider>
            </UserContent.Provider>
        </div>
    )
}

export default ComponentA