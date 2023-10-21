import React, { memo } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MD3Colors } from 'react-native-paper';

type Props = {
    goBack: () => void;
};

const BackButton = ({ goBack }: Props) => (
    <TouchableOpacity onPress={goBack} style={styles.container}>
        <Icon
            size={25}
            color={MD3Colors.primary20}
            name="arrow-left"
        />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 10 + getStatusBarHeight(),
        left: 10,
    },
    image: {
        width: 24,
        height: 24,
    },
});

export default memo(BackButton);