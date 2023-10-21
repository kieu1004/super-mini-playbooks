import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MD3Colors, Button } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';

interface HeaderTabProps {
    title: string;
    subtitle: string;
    navigation: StackNavigationProp<any>;
}

const HeaderTab: React.FC<HeaderTabProps> = ({ title, subtitle, navigation }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
            <Text style={styles.subHeaderText}>{subtitle}</Text>
            <Button
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Icon
                    size={25}
                    color={MD3Colors.primary20}
                    name="arrow-right"
                />
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 16,
        marginLeft: 16
    },
    headerText: {
        flex: 1,
        fontSize: 20,
        color: '#000'
    },
    subHeaderText: {
        flex: 1,
        fontSize: 15
    },
    sideright: {
        flexDirection: "row",
    },
    icon: {
        textAlign: 'center',
    },
});

export default HeaderTab;