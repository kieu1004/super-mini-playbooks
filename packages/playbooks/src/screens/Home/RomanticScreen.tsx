import React from 'react'
import { View, Text } from 'react-native'
import HeaderNav from '../../components/HeaderNav'

export default function RomanticScreen({navigation}) {
  return (
    <View style ={{flex:1}}>
      <HeaderNav navigation={navigation} title="Romantic" />
</View>
  )
}
