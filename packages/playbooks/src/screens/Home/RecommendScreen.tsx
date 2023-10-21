import React, { useCallback, useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

interface Book {
  id: string;
  type: string;
  title: string;
  price: string;
  author: string;
  photos: string;
  desc: string;
}

const RecommendScreenn = () => {
  const [bookData, setBookData] = useState<Book[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadmore, setLoadmore] = useState(true);

  const BASE_URL = 'http://149.28.134.133';
  const GET_BOOK_LIST = '/api/v1/reader/sub-books';

  const handleFetchEBooks = async () => {
    try {
      if (!loadmore) return;

      setLoading(true);

      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RlIjoiYWNjLTAwMDA3NSIsInBob25lIjoiKzg0MzgzMjI5NzUyIiwiaWF0IjoxNjkyMDI0Mjk1fQ.dIYstbiHUUUhLCs4cvAWEWXJHK31WoqzI-UoSqzsYWw';

      const limit = 30;

      const res = await fetch(
        `${BASE_URL}${GET_BOOK_LIST}?page=${page}&recordPerPage=${limit}`,
        {
          method: 'GET',
          headers: {
            token: `${token}`,
          },
        }
      );

      if (res.status === 200) {
        const responseData = await res.json();

        // setBookData((prevData) => [...prevData, ...responseData.result.data]);
        setBookData(responseData.result.data);
        setPage(page);

        if (responseData.result.metadata[0].recordTotal <= page * limit) {
          setLoadmore(false);
        }
      } else {
        console.error('Fetch Book List error:', res.status);
      }

    } catch (error) {
      console.error('Fetch Book List error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchEBooks();
  }, []);

  const renderService = ({ item, index }: { item: Book; index: number }) => (
    <Card mode="contained" style={styles.bookCard}>
      {item.photos && <Card.Cover source={{ uri: `${item.photos}` }} />}
      <Card.Title
        titleVariant="titleMedium"
        subtitleVariant="bodyMedium"
        title={`${item.title}`}
        subtitle={`${item.author} | ${item.type}`}
      />
    </Card>
  );

  const handleLoadMore = () => {
    if (loadmore) {
      handleFetchEBooks();
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={bookData}
        numColumns={2}
        renderItem={renderService}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
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
  bookCard: {
    flex: 0.5,
    margin: 5,
  },
  divider: {
    backgroundColor: 'transparent',
    height: 8,
  },
});

export default RecommendScreenn;