import React from 'react'
import { View, Text } from 'react-native'
import HeaderNav from '../../components/HeaderNav'
import { useNavigation } from '@react-navigation/native';
import TabCatg from '../../components/TabCatg';


export default function CategoryListScreen() {
  const navigation = useNavigation();
  return (
    <View style ={{flex:1}}>
      <HeaderNav navigation={navigation} title="Category" />
      <TabCatg/>
</View>
  )
}
