import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import ItemSwipe from './ItemSwipe';
import {topPost} from '../utils/PostData';

const windowDimensions = Dimensions.get('window');

const Banner = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E293B',
      }}>
      <ScrollView>
        <Text style={{fontSize: 22, fontWeight: '600', color: 'white'}}>
          Bài viết của tháng
        </Text>
        <Swiper
          style={styles.wrapper}
          height={470}
          width={windowDimensions.width * 0.9}
          dot={
            <View
              style={{
                backgroundColor: '#D4d4d4',
                width: 14,
                height: 3,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#04DB41',
                width: 14,
                height: 3,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }>
          {topPost.map((item, index) => {
            return (
              <View key={item.id}>
                <ItemSwipe data={item} />
              </View>
            );
          })}
        </Swiper>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginHorizontal: 10,
  },
  wrapper: {},
  slide1: {
    flex: 1,
  },
  slide2: {},
  slide3: {},
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Banner;
