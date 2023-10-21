import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import EBookCatgScreen from '../screens/Category/EBookCatgScreen';
import ABookCatgScreen from '../screens/Category/ABookCatgScreen';

const TabCatg = () => {
    const [value, setValue] = React.useState<string>('ebook');

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
            {value === 'ebook' && <EBookCatgScreen />}
            {value === 'audiobook' && <ABookCatgScreen />}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    segBtn: {
        marginHorizontal: 16,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default TabCatg;
