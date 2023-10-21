import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Divider } from 'react-native-paper';

const SearchResultScreen = ({ route }) => {
  const { searchResults } = route.params;

  const renderBook = ({ item }) => (
    <Card mode="outlined" style={styles.card}>
      <Card.Title
        title={item.title}
        subtitle={item.author}
      />
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={searchResults}
        renderItem={renderBook}
        ItemSeparatorComponent={() => <Divider style={styles.divider} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    marginHorizontal: 16,
    marginBottom: 8,
  },
  divider: {
    backgroundColor: 'transparent',
    height: 8,
  },
});

export default SearchResultScreen;