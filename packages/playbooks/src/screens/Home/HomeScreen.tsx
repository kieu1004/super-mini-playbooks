import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppbarAction from '../../components/AppbarAction';
import TabBook from '../../components/TabBook';
import RootNavigator from '../../navigation/RootNavigator';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (

    <View style={styles.container}>
      <AppbarAction/>
      <TabBook/>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default HomeScreen;