import React from 'react'
import { Text } from 'react-native'
import style from './style'

export default function ComponentOne() {
    return <Text style = {style.txtB}>Component Oficial</Text>
}


export function ComponentTwo() {
    return <Text style = {style.txtS}>Component One</Text>
}

export function ComponentThree() {
    return <Text style = {style.txtS}>Component Two</Text>
}

