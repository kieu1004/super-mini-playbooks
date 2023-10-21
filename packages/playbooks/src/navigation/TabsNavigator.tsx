import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeNavigator from './HomeNavigator';
import LibraryNavigator from './LibraryNavigator';
import WishlistNavigator from './WishlistNavigator';
import DiscoverNavigator from './DiscoverNavigator';
// import SearchNavigator from './SearchNavigator';

export type TabsParamList = {
  HomeNavigator: undefined;
  AccountNavigator: undefined;
  LibraryNavigator: undefined;
  WishlistNavigator: undefined;
  DiscoverNavigator: undefined;
  // SearchNavigator: undefined;
};

const Tabs = createMaterialBottomTabNavigator<TabsParamList>();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={
          {
            title: 'Home',
            tabBarIcon: 'home',
          }
        }
      />
      {/* <Tabs.Screen
        name="SearchNavigator"
        component={SearchNavigator}
        options={{
          title: 'Search',
          tabBarIcon: 'magnify',
        }}
      /> */}
      <Tabs.Screen
        name="LibraryNavigator"
        component={LibraryNavigator}
        options={{
          title: 'Library',
          tabBarIcon: 'newspaper',
        }}
      />
      <Tabs.Screen
        name="WishlistNavigator"
        component={WishlistNavigator}
        options={{
          title: 'Favorites',
          tabBarIcon: 'heart-outline',
        }}
      />
      <Tabs.Screen
        name="DiscoverNavigator"
        component={DiscoverNavigator}
        options={{
          title: 'Discover',
          tabBarIcon: 'store-outline',
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
