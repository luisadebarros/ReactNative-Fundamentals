import React from 'react'
import { Button } from 'react-native'
import style from './style'

export default props => {

    function execute() {
        console.warn('hm... execute')
    }

    return (
        <>
            <Button 
                title = "Execute One."
                onPress={execute}
            />

            <Button 
                title = "Execute Two."
                onPress={() => {
                    console.warn("second execute")
                }}
            />
        </>
    )
}