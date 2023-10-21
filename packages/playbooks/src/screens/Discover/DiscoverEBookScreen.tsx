import React, { useState } from 'react';
import { Alert, FlatList, ListRenderItem, ScrollView, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, Button, Divider, Text, Title, Paragraph } from 'react-native-paper';
import rcmForU from '../../data/rcmForU.json';
import newReleases from '../../data/newReleases.json';
import { MD3Colors } from 'react-native-paper';
import categoryBook from '../../data/categoryBook.json';
import { useNavigation } from '@react-navigation/native';

const renderDivider = () => <Divider style={styles.divider} />;

const DiscoverEBookScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigation = useNavigation();

  const renderService: ListRenderItem<any> = ({ item, index }) => {
    const MAX_TITLE_LENGTH = 24;

    const truncatedTitle = item.title.length > MAX_TITLE_LENGTH
      ? item.title.substring(0, MAX_TITLE_LENGTH - 3) + '...'
      : item.title;

    if (item.type == 'Ebook') {
      return (
        <Card mode="contained" style={styles.cardWidth}>
          <Card.Cover source={{ uri: `${item.photos}?${index}` }} />
          <Card.Content>
            <Title>{`${truncatedTitle}`}</Title>
            <Paragraph numberOfLines={1}>{item.author}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => { }}>To Favourite</Button>
            <Button onPress={() => { }}>Buy</Button>
          </Card.Actions>
        </Card>
      );
    }
    return null;

  };

  const renderContent: ListRenderItem<any> = ({ item, index }) => {
    const MAX_DESC_LENGTH = 18;

    const truncatedDesc = item.title.length > MAX_DESC_LENGTH
      ? item.desc.substring(0, MAX_DESC_LENGTH - 3) + '...'
      : item.desc;

    if (item.type == 'Ebook') {
      return (
        <Card mode="contained" style={styles.cardWidth}>
          <Card.Cover source={{ uri: `${item.photos}?${index}` }} />
          <Card.Content>
            <Title>{item.title}</Title>
            <Paragraph numberOfLines={3}>{truncatedDesc}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button mode='contained' onPress={() => { }}>Buy</Button>
          </Card.Actions>
        </Card>
      );
    }
    return null;

  };

  const renderServiceCatg = ({ item }: { item: { id: string; category: string } }) => (
    <TouchableOpacity
      onPress={() => setSelectedCategory(item.category === selectedCategory ? null : item.category)}
    >
      <View
        style={{
          ...styles.serviceItem,
          backgroundColor: item.category === selectedCategory ? MD3Colors.primary50 : '#fff',
          borderColor: item.category === selectedCategory ? MD3Colors.primary50 : '#ccc',
        }}
      >
        <Text
          style={{
            ...styles.serviceTitle,
            color: item.category === selectedCategory ? MD3Colors.primary100 : '#000',
          }}
        >
          {item.category}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      <View style={styles.headerCatg}>
        <Text variant="titleLarge" style={styles.headerTitle}>
          Category
        </Text>
        <Button
          onPress={() => Alert.alert('Not implemented yet')}>
          <Icon
            size={25}
            color={MD3Colors.primary20}
            name="arrow-right"
          />
        </Button>
      </View>
      <View style={styles.listCatg}>
        <FlatList
          data={categoryBook.data}
          numColumns={2}
          renderItem={renderServiceCatg}
          ItemSeparatorComponent={renderDivider}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        />
      </View>

      <ScrollView style={styles.scrollcontainer}>
        <View style={styles.header}>
          <View style={{ flexDirection: 'column' }}>
            <Text variant="titleLarge" style={styles.headerTitle}>
              Recommended for you
            </Text>
            <Text variant="titleLarge" style={styles.subHeaderTitle}>
              Based on your reading history
            </Text>
          </View>
          <Button
            onPress={() => navigation.navigate('RecommendScreen')}>
            <Icon
              size={25}
              color={MD3Colors.primary20}
              name="arrow-right"
            />
          </Button>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={rcmForU.data}
          renderItem={renderService}
          ItemSeparatorComponent={renderDivider}
          contentContainerStyle={styles.contentContainer}
        />


        <View style={styles.header}>
          <Text variant="titleLarge" style={styles.headerTitle}>
            Recent Releases
          </Text>
          <Button mode="contained-tonal" onPress={() => Alert.alert('Not implemented yet')}>
            See All
          </Button>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={rcmForU.data}
          renderItem={renderContent}
          ItemSeparatorComponent={renderDivider}
          contentContainerStyle={styles.contentContainer}
        />


      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollcontainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  divider: {
    backgroundColor: 'transparent',
    width: 16,
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerCatg: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  listCatg: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },

  booktypeButton: {
    paddingHorizontal: 10,
    borderRadius: 2,
    paddingVertical: 5,
  },
  headerTitle: {
    flex: 1,
    fontSize: 20
  },
  subHeaderTitle: {
    fontSize: 15
  },
  cardWidth: {
    width: 270,
  },

  dividerLine: {
    marginHorizontal: 20,
    backgroundColor: 'gray',
  },

  serviceItem: {
    flex: 1,
    backgroundColor: '#fff',
    margin: '1%',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    minWidth: '48%',
  },
  serviceTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default DiscoverEBookScreen;