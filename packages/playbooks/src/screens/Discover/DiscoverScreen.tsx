import React from 'react';
import {StyleSheet, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppbarAction from '../../components/AppbarAction';
import TabBook from '../../components/TabBook';
import TabDiscoverBook from '../../components/TabDiscoverBook';

const DiscoverScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AppbarAction navigation={()=>{}}/>
      <TabDiscoverBook/>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default DiscoverScreen;