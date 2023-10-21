import React from 'react'
import { View, Text } from 'react-native'
import HeaderNav from '../../components/HeaderNav'
import FilterBar from '../../components/Filterbar'


export default function NewEstablishScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <HeaderNav navigation={navigation} title="New Establish" />
      <FilterBar/>
    </View>
  )
}
