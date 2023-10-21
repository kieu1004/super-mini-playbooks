import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavBar from '../components/NavBar';
import DiscoverScreen from '../screens/Discover/DiscoverScreen';

export type DiscoverStackParamList = {
  Discover: undefined;
};

const Discover = createNativeStackNavigator<DiscoverStackParamList>();

const DiscoverNavigator = () => {
  return (
    <Discover.Navigator
      screenOptions={{
        header: props => <NavBar {...props} />,
        headerShown: false,
      }}>
      <Discover.Screen name="Discover" component={DiscoverScreen} />
    </Discover.Navigator>
  );
};

export default DiscoverNavigator;
