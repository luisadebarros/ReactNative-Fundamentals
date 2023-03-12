import React, {useState} from 'react'
import { Text } from 'react-native'
import style from '../style'
import SonComponent from './SonComponent'

/**
 * Quando você precisa passar dados de um componente
 * que está "acima" do componente que imprime essas informações
 */
export default props => {
    let x = 19
    let y = 27
    return (
        <>
            <SonComponent a={x} b={y}/>
            <SonComponent a={x + 21} b={x + 15}/>
        </>
    )
}