import React from 'react';
import { Text, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { MD3Colors } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const RatingBar = ({ r1, r2, r3, r4, r5 }) => {
  return (
    <View>
      <View style={styles.ratingBar}>
        <Text style={styles.ratingNumber}>5</Text>
        <ProgressBar progress={r5 / 5} color={MD3Colors.primary80} style={styles.bar} />
      </View>
      <View style={styles.ratingBar}>
        <Text style={styles.ratingNumber}>4</Text>
        <ProgressBar progress={r4 / 5} color={MD3Colors.primary80} style={styles.bar} />
      </View>
      <View style={styles.ratingBar}>
        <Text style={styles.ratingNumber}>3</Text>
        <ProgressBar progress={r3 / 5} color={MD3Colors.primary80} style={styles.bar} />
      </View>
      <View style={styles.ratingBar}>
        <Text style={styles.ratingNumber}>2</Text>
        <ProgressBar progress={r2 / 5} color={MD3Colors.primary80} style={styles.bar} />
      </View>
      <View style={styles.ratingBar}>
        <Text style={styles.ratingNumber}>1</Text>
        <ProgressBar progress={r1 / 5} color={MD3Colors.primary80} style={styles.bar} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ratingBar: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5
  },
  ratingNumber: {
    fontSize: 12,
    marginRight: 5,
  },
  bar: {
    marginTop: 10,
    width: 150,
    borderRadius: 10
  }
});

export default RatingBar;
