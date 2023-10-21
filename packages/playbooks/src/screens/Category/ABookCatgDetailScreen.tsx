import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import HeaderNav from '../../components/HeaderNav';

export default function ABookCatgDetailScreen() {
  const navigation = useNavigation();

  return (
    <View style ={{flex:1}}>
      <HeaderNav navigation={navigation} title="AudioBook Category Detail" />
      </View>
  );
}

