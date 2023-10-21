import React from 'react';
import { View, Image, StyleSheet, Alert, ScrollView } from 'react-native';
import { Text, MD3Colors, Button, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import HeaderDetail from '../../components/HeaderBookDetail';
import HeaderTab from '../../components/HeaderTab';
import RatingBar from '../../components/Ratingbar';

const EBookDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const item = route.params.item;
  const r1 = 1;
  const r2 = 2;
  const r3 = 3;
  const r4 = 4;
  const r5 = 5;
  return (
    <View style={{ flex: 1 }}>
      <HeaderDetail navigation={navigation} />
      <ScrollView style={styles.container}>

        <View style={styles.card}>
          <View style={styles.cardContent}>
            {item.photos && (
              <Image source={{ uri: `${item.photos}` }} style={styles.image} />
            )}

            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.author}>{item.author}</Text>
            </View>

          </View>
        </View>

        <View style={styles.subCardContainer}>
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={styles.infoText}>4,2</Text>
              <Icon
                style={styles.iSubCard}
                size={20}
                color={MD3Colors.primary20}
                name="star"
              />
            </View>
            <Text style={styles.infoText}>1K reviews</Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Icon
                style={styles.iSubCard}
                size={20}
                color={MD3Colors.primary20}
                name="book"
              />
            </View>
            <Text style={styles.infoText}>Ebook</Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={styles.infoText}>320</Text>
            </View>
            <Text style={styles.infoText}>pages</Text>
          </View>
        </View>

        <View style={styles.btndetail}>
          <Button mode="contained-tonal" onPress={() => navigation.navigate('BookViewScreen')}>
            Sample
          </Button>
          <Button mode="contained" onPress={() => { }} >
            Buy with $59
          </Button>
        </View>

        <Divider style={{ marginBottom: 10 }} />

        <HeaderTab title='Overview' subtitle='' navigation={() => { }} />
        <View style={styles.textContainer}>
          <Text>{item.description}</Text>
        </View>


        <View style={styles.header}>
          <Text variant="titleLarge" style={styles.headerTitle}>
            Rating & Review
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

        <View style={styles.rating}>
          <View style={styles.ratingStar}>
            <Text style={styles.ratingNum}>4,2</Text>
            <View style={styles.ratingStarList}>
              <Icon
                style={styles.iSubCard}
                size={20}
                color={MD3Colors.primary20}
                name="star"
              />
              <Icon
                style={styles.iSubCard}
                size={20}
                color={MD3Colors.primary20}
                name="star"
              />
              <Icon
                style={styles.iSubCard}
                size={20}
                color={MD3Colors.primary20}
                name="star"
              />
              <Icon
                style={styles.iSubCard}
                size={20}
                color={MD3Colors.primary20}
                name="star"
              />
              <Icon
                style={styles.iSubCard}
                size={20}
                color={MD3Colors.primary80}
                name="star"
              />
            </View>
          </View>
          <View style={styles.ratingBar}>
            <View style={styles.container}>
              <RatingBar r1={r1} r2={r2} r3={r3} r4={r4} r5={r5} />
            </View>
          </View>
        </View>

        <View style={styles.review}>
          <Text>1388 reviews</Text>
        </View>

        <View style={styles.reviewList}>
          <Text>Reviewer & rating</Text>

          <View style={styles.reviewer}>
            <View style={styles.reviewContent}>
              <Image source={{ uri: 'https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/370521897_1472181883322360_3420892617233741326_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_ohc=Q-FrHUHV16EAX_s_vFf&_nc_ht=scontent.fsgn13-4.fna&cb_e2o_trans=q&oh=00_AfCw7967xo6JyqcWJG0_hBN_lQx89otwX_TUVbbe0nu5jg&oe=651071EC' }} />
              <View style={styles.reviewContainer}>
              </View>
            </View>
            <View style={styles.reviewer}>
              <View style={styles.reviewContent}>
                <Image source={{ uri: 'https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/370521897_1472181883322360_3420892617233741326_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_ohc=Q-FrHUHV16EAX_s_vFf&_nc_ht=scontent.fsgn13-4.fna&cb_e2o_trans=q&oh=00_AfCw7967xo6JyqcWJG0_hBN_lQx89otwX_TUVbbe0nu5jg&oe=651071EC' }} />
                <Text style={styles.reviewerName}>John</Text>
              </View>
            </View>
            <View style={styles.reviewer}>
              <View style={styles.reviewContent}>
                <Image source={{ uri: 'https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/370521897_1472181883322360_3420892617233741326_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_ohc=Q-FrHUHV16EAX_s_vFf&_nc_ht=scontent.fsgn13-4.fna&cb_e2o_trans=q&oh=00_AfCw7967xo6JyqcWJG0_hBN_lQx89otwX_TUVbbe0nu5jg&oe=651071EC' }} />
                <Text style={styles.reviewTitle}>Review content</Text>
              </View>
            </View>
            <View style={styles.reviewer}>
              <View style={styles.reviewContent}>
                <Image source={{ uri: 'https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/370521897_1472181883322360_3420892617233741326_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_ohc=Q-FrHUHV16EAX_s_vFf&_nc_ht=scontent.fsgn13-4.fna&cb_e2o_trans=q&oh=00_AfCw7967xo6JyqcWJG0_hBN_lQx89otwX_TUVbbe0nu5jg&oe=651071EC' }} />
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    width: '100%',
    elevation: 4,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 16,
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
    marginRight: 16,
    borderRadius: 10
  },
  textContainer: {
    marginRight: 16,
    marginLeft: 16,
    marginBottom: 16
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  author: {
    fontSize: 14,
    color: 'gray',
  },
  subCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
    borderRadius: 10,
  },
  iSubCard: {
    marginRight: 2,
  },
  infoText: {
    fontSize: 16,
    color: 'gray',
    marginRight: 2,
  },
  btndetail: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  header: {
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    flex: 1,
    fontSize: 20
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  ratingStar: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  ratingNum: {
    fontSize: 35
  },
  ratingStarList: {
    flexDirection: 'row',
  },
  ratingBar: {

  },
  rbarNum: {

  },
  review: {
    padding: 16
  },
  reviewList: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  reviewer: {
    width: '100%',
    elevation: 4,
  },
  reviewContent: {
    flexDirection: 'row',
    padding: 16,
  },
  reviewimage: {
    width: 35,
    height: 35,
    resizeMode: 'cover',
    marginRight: 16,
  },
  reviewContainer: {
    marginRight: 16,
    marginLeft: 8,
    marginBottom: 16
  },
  reviewerName: {
    fontWeight: 'bold',
    fontSize: 14
  },
  reviewTitle: {
    fontSize: 12
  }
});

export default EBookDetailScreen;