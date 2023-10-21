import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, Divider, MD3Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function BookShelfScreen() {
  return (
    <View style={styles.container}>
      <Text>BookShelf Screen</Text>
      <View style={styles.addButtonContainer}>
        <Card.Actions>
          <Button mode="contained" onPress={() => { }}>
            <Icon
              size={22}
              color={MD3Colors.primary100}
              name="pencil-outline"
            />
            Add new
          </Button>
        </Card.Actions>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
});