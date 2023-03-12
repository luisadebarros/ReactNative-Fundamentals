import React from 'react'
import { View } from 'react-native'
import FirstC from './components/FirstComponent'
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
  <View>
    {/* // dentro de uma chaves a gente pode usar como o javascript  */}
    <Oficial />
    <ComponentTwo />
    <ComponentThree />
    <FirstC />
  </View>)
