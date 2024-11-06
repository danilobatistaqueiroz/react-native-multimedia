import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useRef } from 'react';
import Video, {OnBufferData, OnVideoErrorData, VideoRef} from 'react-native-video';

export default function HomeScreen() {

  const videoRef = useRef<VideoRef>(null);
  const background = require('@/assets/VID1.mp4');

  function onBuffer(e: OnBufferData) : void {

  }

  function onError(e: OnVideoErrorData) : void {
    console.log(`Error loading video: ${e.error}`);
  }
  
  return (
    <View style={{width:400,height:600}}>

<Video 
    // Can be a URL or a local file.
    source={background}
    // Store reference  
    ref={videoRef}
    // Callback when remote video is buffering                                      
    onBuffer={onBuffer}
    // Callback when video cannot be loaded              
    onError={onError}               
    style={styles.backgroundVideo}
   />

</View>


  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });