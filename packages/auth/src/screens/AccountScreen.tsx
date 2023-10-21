import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {useAuth} from '../contexts/AuthContext';

const AccountScreen = () => {
  const {signOut} = useAuth();

  return (
    <View style={styles.container}>
      <Text>{}</Text>
      <Button mode="contained" onPress={signOut}>
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AccountScreen;
