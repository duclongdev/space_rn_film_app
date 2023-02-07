import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, View, Text, StatusBar} from 'react-native';

import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';
import VideoPlayer from '../components/ShortVideo';
import videosData from '../utils/videosData';
import {WINDOW_HEIGHT} from '../utils/animation';

const Search = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const bottomTabHeight = useBottomTabBarHeight();
  const statusBarHeight = StatusBar.currentHeight || 0;

  return (
    <FlatList
      data={videosData}
      pagingEnabled
      renderItem={({item, index}) => (
        <View>
          <VideoPlayer data={item} isActive={activeVideoIndex === index} />
          <View style={{height: bottomTabHeight}}></View>
        </View>
      )}
      onScroll={e => {
        const index = Math.round(
          e.nativeEvent.contentOffset.y / (WINDOW_HEIGHT - bottomTabHeight),
        );
        setActiveVideoIndex(index);
      }}
    />
  );
};

export default Search;
