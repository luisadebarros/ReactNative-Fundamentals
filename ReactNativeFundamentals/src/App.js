import React from 'react'
import { View, StyleSheet } from 'react-native'
// import FirstC from './components/FirstComponent'
import MinMax from './components/MinMax'
import Random from './components/Random'

// fora das chaves ele exporta o default e dentro algum expecífico (functions)
import Oficial, { ComponentTwo, ComponentThree } from './components/Multi'


// react foi primeiro pra web e dps ap/ android e etc
// cada arquivo desse é um component
// raiz dos components

// export default () => {
//   // jsx é html que é interpretado como javascript
//   // ele faz uma tradução direta para o que está usando (IOS, Android, web)
//   return <Text>First Component!!</Text>
// }

// precisa fechar as tags

export default () => (
  <View style = {style.App}>
    {/* // dentro de uma chaves a gente pode usar como o javascript  */}
    {/* instânciando um componente */}
    
    {/* <MinMax min = {1} max ={20} /> */}
    {/* <MinMax min = {-5} max = {9} /> */}

    <Random min = {5} max = {9}/>
    <Random min = {3} max = {17}/>
    <Random min = {-9} max = {-1}/>

    {/* <Oficial />
    <ComponentTwo />
    <ComponentThree />
    <FirstC /> */}
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
