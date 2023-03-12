import React from 'react'
import { Text } from 'react-native'
import style from './style'

/**o param/props é como se fosse um parametro universal */
export default props => {
    console.warn(props)
    return (
        <Text style = {style.txtB}>
            the value {props.max} is bigger than {props.min}!
        </Text>

    )
}