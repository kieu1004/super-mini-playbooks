import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavBar from '../components/NavBar';
import SearchResultScreen from '../screens/SearchResultScreen';

export type SearchResultStackParamList = {
    SearchResult: undefined;
};

const SearchResult = createNativeStackNavigator<SearchResultStackParamList>();

const SearchResultNavigator = () => {
  return (
    <SearchResult.Navigator
      screenOptions={{
        header: props => <NavBar {...props} />,
      }}>
      <SearchResult.Screen name="SearchResult" component={SearchResultScreen} />
    </SearchResult.Navigator>
  );
};

export default SearchResultNavigator;
