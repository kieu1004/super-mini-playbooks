import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { MD3Colors } from 'react-native-paper';
import EBookScreen from '../screens/Home/EBookScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ABookScreen from '../screens/Home/ABookScreen';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

const TabBook = () => {
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
            {value === 'ebook' && <EBookScreen />}
            {value === 'audiobook' && <ABookScreen />}
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

export default TabBook;