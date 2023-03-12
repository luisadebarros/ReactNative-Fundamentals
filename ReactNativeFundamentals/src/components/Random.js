import React from 'react'
import { Text } from 'react-native'
import style from './style';

export default ({min, max}) => {
    // props são somente leitura
    // mas se você tornar eles como variáveis, como acima, pois fazem uma cópia do props
    // let {min} += 45 ai ele add 45, pois criou-se uma variável 
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return <Text>
        <Text style = {style.txtB}>
            the random value is {randomNumber}!
        </Text>
    </Text>
}