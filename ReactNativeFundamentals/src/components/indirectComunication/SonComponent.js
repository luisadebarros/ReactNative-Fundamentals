import React, {useState} from 'react'
import { Button, Text } from 'react-native'


export default props => {

    function generateNumber(min, max) {
        const factor = max - min + 1
        return parseInt(Math.random() * factor) + min
    }

    return (
        <>
            <Button 
                title = "execute"
                onPress = { function()
                    {
                       const n = generateNumber(props.min, props.max)
                       props.funcao(n, 'hmmm, the text is: ')
                    }
                }
            />
        </>
    )
}