import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Button, Card, Divider, MD3Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import rcmForU from '../../data/rcmForU.json';

const renderItem = ({ item }: any) => (
  <Card mode="contained" style={styles.card}>
    <View style={styles.cardContent}>
      <Card.Cover source={{ uri: `${item.photos}` }} style={styles.cover} />
      <View style={styles.textContainer}>
        <View style={styles.titleRow}>
          <View style={styles.titleInfo}>
            <Card.Title
              title={`${item.title}`}
              subtitle={`${item.author} • ${item.type}`}
              titleStyle={styles.title}
              subtitleStyle={styles.subtitle}
              titleNumberOfLines={2}
            />
          </View>
          <Icon
            color={MD3Colors.primary20}
            name="cards-heart"
            size={24}
            style={styles.icon}
          />
        </View>
        <Card.Actions>
          <Button mode="contained" onPress={() => { }}>
            Read now
          </Button>
        </Card.Actions>
      </View>
    </View>
  </Card>
);

const renderDivider = () => <Divider style={styles.divider} />;

const WishlistScreen = () => {
  return (
    <FlatList
      data={rcmForU.data}
      renderItem={renderItem}
      ItemSeparatorComponent={renderDivider}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 16,
  },
  divider: {
    backgroundColor: 'transparent',
    height: 5,
  },
  card: {
    marginBottom: 12,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardContent: {
    flexDirection: 'row',
  },
  cover: {
    width: 90,
    height: 120,
    margin: 8,
  },
  textContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  titleInfo: {
    flex: 1,
  },
  subtitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
  },
  icon: {
    marginRight: 20,
  },
});

export default WishlistScreen;