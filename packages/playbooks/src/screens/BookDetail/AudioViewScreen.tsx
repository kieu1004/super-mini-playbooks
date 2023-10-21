import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, ScrollView, Animated, TouchableOpacity } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
// import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MD3Colors } from 'react-native-paper';
import audioBook from '../../data/rcmForU.json';
import AppbarHeader from '../../components/AppbarHeader';
import HeaderAudioDetail from '../../components/HeaderAudioDetail';
// import TrackPlayer, { Capability, Event, RepeatMode, State, usePlaybackState, useProgress, useTrackPlayerEvents } from 'react-native-track-player';

const ABookDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const item = route.params.item;

  // const textAnimatedValue = useRef(new Animated.Value(0)).current;
  // const playBackState = usePlaybackState();

  // useEffect(() => {
  //   const animateText = () => {
  //     Animated.timing(textAnimatedValue, {
  //       toValue: 1,
  //       duration: 8000,
  //       useNativeDriver: true,
  //     }).start(() => {
  //       textAnimatedValue.setValue(0);
  //       animateText();
  //     });
  //   };

  //   animateText();
  //   setUpPlayer();

  //   return () => {
  //     textAnimatedValue.stopAnimation();
  //   };
  // }, [textAnimatedValue]);

  // const translateX = textAnimatedValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [-320, 320],
  // });



  //Player
  // const audioBookTracks = audioBook.data.filter(item => item.type === 'Audio Book');

  // const tracks = audioBookTracks.map(item => {
  //   const track = {
  //     id: item.id,
  //     url: item.packages?.[0]?.audio || '',
  //     title: item.title,
  //     author: item.author,
  //   };
  //   console.log('Generated track:', track);
  //   return track;
  // });


  // const setUpPlayer = async () => {
  //   try {
  //     await TrackPlayer.setupPlayer();
  //     await TrackPlayer.add(tracks);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };


  // const togglePayBack = async (playBackState: State) => {
  //   const currentTrack = await TrackPlayer.getCurrentTrack();
  //   console.log('currrent Track', currentTrack)
  //   if (currentTrack != null) {
  //     if (playBackState == State.Paused) {
  //       await TrackPlayer.play();
  //     } else {
  //       await TrackPlayer.pause()
  //     }
  //   }
  // }






  return (
    <View style={{ flex: 1, backgroundColor:'#fff'}}>
      <HeaderAudioDetail/>
      <ScrollView style={styles.container}>

        <Card style={styles.card}>
          <View style={styles.cardContent}>
            <Image source={{ uri: item.photos }} style={styles.image} />
            <Button
              mode="contained-tonal"
              onPress={() => { }}
              style={styles.buyButton}
            >
              Buy with $59
            </Button>
          </View>
        </Card>

        <View style={{ alignItems: 'center', margin: 16 }}>
          <Text>12 % played - 1 minute for the sample book</Text>
        </View>

        {/* <View style={{ alignItems: 'center', margin: 10 }}>
          <Animated.Text style={[styles.animatedText, { transform: [{ translateX }] }]}>
            {`${item.packages[0].name} •${item.title} • ${item.author}`}
          </Animated.Text>
        </View> */}

        <View style={styles.player}>
          {/* <Slider
            style={styles.progressBar}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor={MD3Colors.primary20}
            minimumTrackTintColor={MD3Colors.primary20}
            maximumTrackTintColor="#FFF"
            onSlidingComplete={() => { }}
          /> */}
          <View style={styles.progressLevelDuration}>
            <Text style={styles.progressLabelText}>00:00</Text>
            <Text style={styles.progressLabelText}>00:00</Text>
          </View>

          <View style={styles.playerControlContainer}>
            <TouchableOpacity onPress={() => { }}>
              <Icon
                style={styles.icon}
                size={30}
                color={MD3Colors.primary20}
                name="rewind-30"
              />
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={() => togglePayBack(playBackState)}> */}
            <TouchableOpacity onPress={() => { }}>
              <Icon
                style={styles.icon}
                size={40}
                color={MD3Colors.primary20}
                // name={playBackState === State.Playing ? "play-circle" : "pause-circle"}
                name="pause-circle"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { }}>
              <Icon
                style={styles.icon}
                size={30}
                color={MD3Colors.primary20}
                name="fast-forward-30"
              />
            </TouchableOpacity>


          </View>

        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    width: '100%',
    elevation: 4,
  },
  cardContent: {
    position: 'relative',
    padding: 25,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
  },
  buyButton: {
    position: 'absolute',
    bottom: 30,
  },
  btndetail: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  animatedText: {
    fontSize: 16,
    textAlign: 'center',
  },
  bookContent: {
    textAlign: 'center',
    color: '#000'
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000'
  },
  bookAuthor: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000'
  },
  player: {
    marginHorizontal: 16,
  },
  progressBar: {
    width: 350,
    height: 20,
    flexDirection: 'row',
    marginTop: 20,
  },
  progressLevelDuration: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelText: {
    color: "#000",
    fontWeight: '500'
  },
  playerControlContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 15,
  },
  icon: {
    textAlign: 'center',
    marginRight: 12
  },
});

export default ABookDetailScreen;