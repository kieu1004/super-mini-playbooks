import * as React from 'react';
import { View, StyleSheet } from 'react-native'
import { Appbar, MD3Colors } from 'react-native-paper';


const AppbarHeader = () => (
    <Appbar.Header style={styles.appBarContainer}>
        <Appbar.BackAction onPress={() => {}} />
        <View style={styles.appBarRight}>
            <Appbar.Action
                icon='cast'
                color={MD3Colors.primary20}
                size={25}
                onPress={() => { }} />
            <Appbar.Action
                icon='format-list-bulleted'
                color={MD3Colors.primary20}
                size={25}
                onPress={() => { }} />
            <Appbar.Action
                icon='bookmark-outline'
                color={MD3Colors.primary20}
                size={25}
                onPress={() => { }} />
            <Appbar.Action
                icon='menu'
                color={MD3Colors.primary20}
                size={25}
                onPress={() => { }} />
        </View>
    </Appbar.Header>
);

export default AppbarHeader;



const styles = StyleSheet.create({
    appBarContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#F3EDF6',
    },
    appBarRight: {
        display: 'flex',
        flexDirection: 'row'
    },
});