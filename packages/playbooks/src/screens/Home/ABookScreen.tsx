import React, { useState } from 'react';
import { Alert, FlatList, ListRenderItem, ScrollView, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, Button, Divider, Text } from 'react-native-paper';
import rcmForU from '../../data/rcmForU.json';
import newReleases from '../../data/newReleases.json';
import { MD3Colors } from 'react-native-paper';
import discoverBook from '../../data/discoverBook.json';
import { useNavigation } from '@react-navigation/native';


const renderDivider = () => <Divider style={styles.divider} />;

const ABookScreen = () => {
  const navigation = useNavigation();

  const renderService: ListRenderItem<any> = ({ item, index }) => {
    const MAX_TITLE_LENGTH = 8;

    const truncatedTitle = item.title.length > MAX_TITLE_LENGTH
      ? item.title.substring(0, MAX_TITLE_LENGTH - 3) + '...'
      : item.title;
    if (item.type == 'Audio Book') {
      return (
        <Card mode="contained" onPress={() => navigation.navigate('ABookDetailScreen', { item })}>
          <Card.Cover source={{ uri: `${item.photos}?${index}` }} />
          <Card.Title
            titleVariant="titleMedium"
            subtitleVariant="bodyMedium"
            title={`${item.type} • ${truncatedTitle}`}
            subtitle={item.author}
          />
        </Card>
      );
    }
    return null;
  };

  const renderServiceCatg = ({ item }: { item: { id: string; category: string, image: string } }) => {
    const navigateToScreen = ({ }) => {
      switch (item.category) {
        case 'Category':
          navigation.navigate('CategoryListScreen', { item });
          break;
        case 'Best Seller':
          navigation.navigate('BestSellerScreen', { item });
          break;
        case 'New Establish':
          navigation.navigate('NewEstablishScreen', { item });
          break;
        case 'Romantic':
          navigation.navigate('RomanticScreen', { item });
          break;
        default:
          break;
      }
    };

    return (
      <TouchableOpacity
        style={styles.serviceItem}
        onPress={navigateToScreen}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={{ uri: item.photos }} style={styles.categoryImage} />
          <Text style={styles.serviceTitle}>{item.category}</Text>
        </View>
      </TouchableOpacity>
    );
  };



  return (
    <View style={styles.container}>

      {/* <Divider style={styles.dividerLine} /> */}

      {/* Category filter */}
      <ScrollView style={styles.scrollcontainer}>
        <View style={styles.headerCatg}>
          <Text variant="titleLarge" style={styles.headerTitle}>
            Discovery PlayBooks
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

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={discoverBook.data}
          renderItem={renderServiceCatg}
          ItemSeparatorComponent={renderDivider}
          contentContainerStyle={styles.contentContainer}
        />


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
            New Releases
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

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={newReleases.data}
          renderItem={renderService}
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
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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



  booktypeButton: {
    paddingHorizontal: 10,
    borderRadius: 2,
    paddingVertical: 5,
  },
  bookcategoryButton: {
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 5,
    borderColor: '#6750A4',
    borderWidth: 1
  },
  booktypeText: {
    fontSize: 16,
    color: '#000'
  },
  dividerLine: {
    marginHorizontal: 20,
    backgroundColor: 'gray',
  },

  serviceItem: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 10,
    marginRight: 1,
    maxWidth: 120
  },
  serviceTitle: {
    fontSize: 12,
    fontWeight: '100',
    alignItems: 'center'
  },
  categoryImage: {
    width: 20,
    height: 20,
    marginRight: 10
  },
});

export default ABookScreen;