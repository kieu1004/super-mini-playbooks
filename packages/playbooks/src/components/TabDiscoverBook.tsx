import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import DiscoverEBookScreen from '../screens/Discover/DiscoverEBookScreen';
import DiscoverABookScreen from '../screens/Discover/DiscoverABookScreen';

const TabDiscoverBook = () => {
    const [value, setValue] = React.useState<string>('ebook');

    const handleValueChange = (newScreen: string) => {
        setValue(newScreen);
    };
    const IconBook = '<Icon size={25} color={MD3Colors.primary20} name="arrow-left" />'

    return (
        <SafeAreaView style={styles.container}>
            <SegmentedButtons
                style={styles.segBtn}
                value={value}
                onValueChange={handleValueChange}
                buttons={[
                    {
                        value: 'ebook',
                        label: 'EBOOK',
                        style: {
                            minWidth: 150,
                        },
                    },
                    {
                        value: 'audiobook',
                        label: 'AUDIO BOOK',
                        style: {
                            minWidth: 150,
                        },
                    },
                ]}
            />
            {value === 'ebook' && <DiscoverEBookScreen />}
            {value === 'audiobook' && <DiscoverABookScreen />}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    segBtn: {
        marginTop: 5,
        marginBottom: 10,
    },
});

export default TabDiscoverBook;