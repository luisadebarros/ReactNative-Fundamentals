import React, {useState} from 'react'
import SonComponent from './SonComponent'
import { Text } from 'react-native'
import style from '../style'

/**
 * Quando você precisa passar dados de um componente
 * que está "acima" do componente que imprime essas informações
 */
export default props => {

    const [num, setNum] = useState(0)
    const [txt, setText] = useState('the number is: ')

    function showValue(number, text){
        setNum(number)
        setText(text)
    }

    return (
        <>
            <Text style = {style.txtB}>
                {txt}{num}
            </Text>
            <SonComponent
                min = {9}
                max = {17} 
                funcao = {showValue}
            />
        </>
    )
}