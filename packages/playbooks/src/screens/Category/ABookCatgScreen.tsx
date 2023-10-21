import React from 'react';
import { View, FlatList, Text, StyleSheet, ListRenderItem, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import typeBoook from '../../data/typeBoook.json';

const renderDivider = () => <View style={styles.divider} />;

export default function ABookCatgScreen() {
  const navigation = useNavigation();
  const renderServiceCatg: ListRenderItem<any> = ({ item, index }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ABookCatgDetailScreen')}>
      <View style={styles.serviceItem}>
        <Text style={styles.serviceTitle}>{item.catgname}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={typeBoook.data[1].category}
        renderItem={renderServiceCatg}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={renderDivider}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  divider: {
    backgroundColor: 'transparent',
    width: 16,
  },
  serviceItem: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginTop: 10,
  },
  serviceTitle: {
    fontSize: 15,
    marginBottom: 5,
  },
});