import * as React from 'react';
import { SafeAreaView, useWindowDimensions, View, Text } from 'react-native';
// import { Reader, ReaderProvider } from '@epubjs-react-native/core';
// import { useFileSystem } from '@epubjs-react-native/file-system'; // for Bare React Native project
// import { useFileSystem } from '@epubjs-react-native/expo-file-system'; // for Expo project

export default function BookViewScreen() {
  const { width, height } = useWindowDimensions();
  return (
    // <SafeAreaView>
    //   <ReaderProvider>
    //     <Reader
    //       src="https://s3.amazonaws.com/moby-dick/OPS/package.opf"
    //       width={width}
    //       height={height}
    //       fileSystem={useFileSystem}
    //     />
    //   </ReaderProvider>
    // </SafeAreaView>

    <View>
      <Text>Hello Book View</Text>
    </View>
  );
}