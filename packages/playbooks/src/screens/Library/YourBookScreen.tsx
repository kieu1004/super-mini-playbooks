import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button, Card, Divider, MD3Colors } from 'react-native-paper';

export default function YourBookScreen() {
  return (
    <View style={styles.container}>
      <Image
       source={{ uri: 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/371479006_1472181879989027_6510634973657416856_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=49d041&_nc_ohc=RdGokePSr0MAX_CbATj&_nc_ht=scontent.fsgn8-2.fna&cb_e2o_trans=q&oh=00_AfACUscHugoGCTdMYRECswGY1UbaU5kvHT6vkEfvXfdgtw&oe=65110DA6' }}
        style={styles.image}
      />
      <Text style={styles.text}>
        Create your collection
        From romances to superhero
        comics, we have a wide
        range of titles to suit your taste.
      </Text>
      <Card.Actions>
        <Button mode="contained" onPress={() => { }}>
          Buy book
        </Button>
      </Card.Actions>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    textAlign: 'center',
    marginBottom: 16,
  },
});
