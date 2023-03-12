// hooks = ganchos, que ajudam o framework detectar as coisas
// no caso do useState = mudanças
import React, {useState} from 'react'
import { Text, Button } from 'react-native'
import style from './style'


export default props => {

    const [number, setNumber] = useState(props.inicial)
    const [quant, setQuant] = useState(props.quant)

    
    const incN = () => setNumber(number + quant)
    const descN = () => setNumber(number - quant) 

    const incQ = () => setQuant(quant + 1)
    const descQ = () => setQuant(quant - 1) 

    return (
        <>
            <Text style = {style.txtM}>{number}</Text>
            <Button title = "+" onPress={incN}/>
            <Button title = "-" onPress={descN}/>

            <Text style = {style.txtM}>{quant}</Text>
            <Button title = "+" onPress={incQ}/>
            <Button title = "-" onPress={descQ}/>
        </>
      
    )
}
