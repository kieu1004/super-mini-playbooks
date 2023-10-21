import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet, View, ScrollView, ListRenderItem } from 'react-native';
import { MD3Colors, Searchbar, Card, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import libraryBook from '../data/libraryBook.json';
import TopTabNavigation from '../components/TopTabNavigation';

interface Book {
  id: string;
  type: string;
  title: string;
  price: string;
  author: string;
  image: string;
  desc: string;
}

const renderService: ListRenderItem<any> = ({ item, index }) => (
  <Card mode="contained" style={styles.bookCard}>
    <Card.Cover source={{ uri: `${item.image}?${index}` }} />
    <Card.Title
      titleVariant="titleMedium"
      subtitleVariant="bodyMedium"
      title={`${item.title}`}
      subtitle={`${item.author} | ${item.type}`}
    />
  </Card>
);
const renderDivider = () => <Divider style={styles.divider} />;

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const navigation = useNavigation();

  const onChangeSearch = useCallback((query: string) => {
    setSearchQuery(query);
    if (query === '') {
      setFilteredBooks([]);
    } else {
      const filtered = libraryBook.data.filter((book: Book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  }, []);

  const selectBook = (book: Book) => {
    // navigation.navigate('SearchResultScreen', { searchResults: [book] });
  };

  const renderBook = ({ item }: { item: Book }) => (
    <Card mode="outlined" style={styles.card} onPress={() => selectBook(item)}>
      <Card.Title
        title={item.title}
        subtitle={item.author}
      />
    </Card>
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search..."
        onChangeText={onChangeSearch}
        value={searchQuery}
        iconColor={MD3Colors.primary50}
        style={styles.searchbar}
      />
      <Divider style={styles.divider} />
      <FlatList
        data={libraryBook.data}
        numColumns={2}
        renderItem={renderService}
        ItemSeparatorComponent={renderDivider}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 10,
  },
  searchbar: {
    margin: 16,
  },
  card: {
    marginHorizontal: 16,
    marginBottom: 8,
  },
  bookCard: {
    flex: 0.5,
    margin: 5,
  },
  divider: {
    backgroundColor: 'transparent',
    height: 8,
  },
});

export default SearchScreen;