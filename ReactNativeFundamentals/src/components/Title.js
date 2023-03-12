import React from 'react'
import { View, Text } from 'react-native'
import style from './style'


export default props => {
    return (
        // para retornar 2 elementos direto, 
        // sem estar dento de uma view ou um react.fragment ou <>
        <>
            <Text style = {style.txtB}>{props.title}</Text>
            <Text style = {style.txtM}>{props.subtitle}</Text>
        </>
    )
}