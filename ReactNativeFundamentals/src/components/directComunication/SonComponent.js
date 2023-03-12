import React, {useState} from 'react'
import { Text } from 'react-native'
import style from '../style'

export default props => {
    return (
        <>
            <Text style = {style.txtM}>{props.a}</Text>
            <Text style = {style.txtM}>{props.b}</Text>
        </>
    )
}