import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavBar from '../components/NavBar';
import LibraryScreen from '../screens/Library/LibraryScreen';

export type LibraryStackParamList = {
  Library: undefined;
};

const Library = createNativeStackNavigator<LibraryStackParamList>();

const LibraryNavigator = () => {
  return (
    <Library.Navigator
      screenOptions={{
        header: props => <NavBar {...props} />,
        headerShown: false,
      }}>
      <Library.Screen name="Library" component={LibraryScreen} />
    </Library.Navigator>
  );
};

export default LibraryNavigator;
