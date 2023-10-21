import React, {useCallback, useMemo, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {CalendarList, CalendarUtils, DateData} from 'react-native-calendars';
import {FAB, List, MD3Colors} from 'react-native-paper';


const SeriesScreen = () => {

  return (
    <View style={styles.container}>
      <FAB
        icon="plus"
        color={MD3Colors.primary50}
        style={styles.fab}
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fab: {
    position: 'absolute',
    right: 0,
    margin: 16,
    bottom: 0,
  },
});

export default SeriesScreen;