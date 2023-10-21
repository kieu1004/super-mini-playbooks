import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import YourBookScreen from '../screens/Library/YourBookScreen';
import BookShelfScreen from '../screens/Library/BookShelfScreen';
import SeriesScreen from '../screens/Library/SeriesScreen';

const TabLibrary = () => {
    const [value, setValue] = React.useState<string>('yourbook');

    const handleValueChange = (newScreen: string) => {
        setValue(newScreen);
    };

    return (
        <SafeAreaView style={styles.container}>
            <SegmentedButtons
                style={styles.segBtn}
                value={value}
                onValueChange={handleValueChange}
                buttons={[
                    {
                        value: 'yourbook',
                        label: 'Your Books',
                        style: {
                            borderRadius: 0,
                            borderTopWidth: 0,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            borderBottomWidth: 1,
                            minWidth: 100,
                        },
                    },
                    {
                        value: 'bookshelf',
                        label: 'Book Shelf',
                        style: {
                            borderRadius: 0,
                            borderTopWidth: 0,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            borderBottomWidth: 1,
                            minWidth: 100,
                        },
                    },
                    {
                        value: 'series',
                        label: 'Series',
                        style: {
                            borderRadius: 0,
                            borderTopWidth: 0,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            borderBottomWidth: 1,
                            minWidth: 100,
                        },
                    },
                ]}
            />
            {value === 'yourbook' && <YourBookScreen />}
            {value === 'bookshelf' && <BookShelfScreen />}
            {value === 'series' && <SeriesScreen />}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    segBtn: {
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TabLibrary;