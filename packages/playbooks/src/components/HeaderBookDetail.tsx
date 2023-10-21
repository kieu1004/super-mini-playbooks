import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MD3Colors } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';

interface HeaderNavProps {
    navigation: StackNavigationProp<any>;
}

const HeaderDetail: React.FC<HeaderNavProps> = ({ navigation }) => {
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: 'row' }}>
                <Icon
                    size={25}
                    color={MD3Colors.primary20}
                    name="arrow-left"
                    onPress={() => {
                        navigation.goBack();
                    }}
                />
            </View>
            <View style={styles.sideright}>
                <View style={{ alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                    <Icon
                        style={styles.icon}
                        size={25}
                        color={MD3Colors.primary20}
                        name="magnify"
                    />
                </View>

                <View style={{ alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                    <Icon
                        style={styles.icon}
                        size={25}
                        color={MD3Colors.primary20}
                        name="bookmark-plus-outline"
                    />
                </View>
                <View style={{ alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                    <Icon
                        style={styles.icon}
                        size={25}
                        color={MD3Colors.primary20}
                        name="dots-vertical"
                    />
                </View>
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
    },
});

export default HeaderDetail;
