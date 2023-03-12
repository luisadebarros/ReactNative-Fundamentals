/** fora das chaves ele exporta o default
 *  e dentro algum expecífico (functions)
 * import Oficial, { ComponentTwo, 
 * ComponentThre } from './components/Multi'*/ 

import React from 'react'
import { View, StyleSheet } from 'react-native'
import DadComponent from './components/directComunication/DadComponent'
// import Couting from './components/Couting'
// import Button from './components/Button'
// import FirstC from './components/FirstComponent'
// import MinMax from './components/MinMax'
// import Random from './components/Random'
// import Title from './components/Title'


/** 
 react foi primeiro pra web e dps app/android e etc
 cada arquivo desse é um component
 raiz dos components
*/ 

/**export default () => {
 jsx é html que é interpretado como javascript
ele faz uma tradução direta para o que está usando (IOS, Android, web)
return <Text>First Component!!</Text>
}
*/

// precisa fechar as tags

export default () => (
  <View style = {style.App}>

    {/* dentro de uma chaves,
     a gente pode usar como o javascript
     instânciando um componente */}
    
    {/* <Couting inicial = {100} quant = {0}/> */}

    <DadComponent />

    {/* <Button 

    /> */}

    {/* <Oficial />
    <ComponentTwo />
    <ComponentThree />
    <FirstC /> */

    /* <MinMax min = {1} max ={20} /> 
     <MinMax min = {-5} max = {9} /> */

    /* <Random min = {5} max = {9}/>
    <Random min = {3} max = {17}/>
    <Random min = {-9} max = {-1}/> */

    /* <Title
      title = "hi! welcome to our page!"
      subtitle = "this a page just to test React things"
    /> */
    }



  </View>
)


// define esilos que eu posso usar
const style = StyleSheet.create({
  App: {
    backgroundColor: '#e5989b',
    // 1 = tela inteira
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    margin: 40
  }
})
