import React from "react";
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { MD3Colors } from 'react-native-paper';

const HeaderAudioDetail = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Icon
                    size={25}
                    color={MD3Colors.primary20}
                    name="arrow-left"
                />
            </TouchableOpacity>
            <View style={styles.sideright}>
                <Icon
                    style={styles.icon}
                    size={25}
                    color={MD3Colors.primary20}
                    name="cast"
                />
                <Icon
                    style={styles.icon}
                    size={25}
                    color={MD3Colors.primary20}
                    name="format-list-bulleted"
                />
                <Icon
                    style={styles.icon}
                    size={25}
                    color={MD3Colors.primary20}
                    name="bookmark-outline"
                />
                <Icon
                    style={styles.icon}
                    size={25}
                    color={MD3Colors.primary20}
                    name="dots-vertical"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: '#F3EDF6',
        padding: 15,
        alignItems: 'center',
        justifyContent: "space-between",
    },
    headerText: {
        fontSize: 20,
        fontWeight: "400",
        marginLeft: 10,
        alignItems: "center",
        color: "#000"
    },
    sideright: {
        flexDirection: "row",
    },
    icon: {
        textAlign: 'center',
        marginRight: 12
    },
});

export default HeaderAudioDetail;