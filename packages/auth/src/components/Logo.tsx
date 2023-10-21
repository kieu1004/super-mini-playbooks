import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image
       source={{ uri: 'https://i.pinimg.com/originals/85/ad/a1/85ada1467cbaaf05b183050451a8e353.png' }}
        style={styles.image}
      />
);

const styles = StyleSheet.create({
  image: {
    width: '100%',
    top: -60,
    height: 200,
    resizeMode: 'contain',
  },
});

export default memo(Logo);