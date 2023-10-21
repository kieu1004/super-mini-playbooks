import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavBar from '../components/NavBar';
import ABookScreen from '../screens/Home/ABookScreen';

export type ABookStackParamList = {
  ABook: undefined;
};

const ABook = createNativeStackNavigator<ABookStackParamList>();

const ABookNavigator = () => {
  return (
    <ABook.Navigator
      screenOptions={{
        header: props => <NavBar {...props} />,
      }}>
      <ABook.Screen name="ABook" component={ABookScreen} />
    </ABook.Navigator>
  );
};

export default ABookNavigator;
