import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { MD3Colors } from 'react-native-paper';





export default function HomeHeader() {

    return (
        <View style={styles.header}>

            <View style={{ alignItems: "center", justifyContent: "center", marginLeft: 15 }}>
                <Icon
                    style={styles.icon}
                    size={25}
                    color={MD3Colors.primary20}
                    name="menu"
                />
            </View>
            <View style={styles.sideright}>
                <View style={{ alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                    <Icon
                        style={styles.icon}
                        size={25}
                        color={MD3Colors.primary20}
                        name="cast-connected"
                    />
                </View>

                <View style={{ alignItems: "center", justifyContent: "center", marginRight: 15 }}>
                    <Icon
                        style={styles.icon}
                        size={25}
                        color={MD3Colors.primary20}
                        name="magnify"
                    />
                </View>
            </View>



        </View>
    )
}





const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: "#fff",
        height: 50,
        justifyContent: "space-between",

    },
    sideright: {
        flexDirection: "row",
    },
    icon: {
        textAlign: 'center',
    },
});