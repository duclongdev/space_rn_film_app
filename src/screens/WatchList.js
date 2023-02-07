import React, {useState} from 'react';

import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faRankingStar} from '@fortawesome/free-solid-svg-icons';
import RankScreen from './RankScreen';
import MyListScreen from './MyListScreen';

const windowDimensions = Dimensions.get('window');

export default function WatchList() {
  const [choice, setChoice] = useState(1);

  return (
    <View style={styles.body}>
      <View style={{paddingHorizontal: 16, flex: 1.5}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title}>Watchlist</Text>
          <Image
            source={require('../assets/main_logo.png')}
            style={{width: 38, height: 38, borderRadius: 10}}
          />
        </View>

        {/* 2 button below Watchlist title */}
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 36,
            justifyContent: 'space-between',
            paddingHorizontal: windowDimensions.width * 0.08,
          }}>
          <Pressable
            onPress={() => {
              setChoice(1);
            }}
            style={() => [
              styles.buttonNavi,
              {
                backgroundColor: choice === 1 ? '#EBE910' : '#04DB41',
              },
            ]}>
            <Text style={styles.textInButton}>Mylist</Text>
            <Icon name="grid-outline" size={24} color={'#000'} />
          </Pressable>

          <Pressable
            onPress={() => {
              setChoice(2);
            }}
            style={() => [
              styles.buttonNavi,
              {
                backgroundColor: choice === 2 ? '#EBE910' : '#04DB41',
              },
            ]}>
            <Text style={styles.textInButton}>Rank</Text>
            <FontAwesomeIcon icon={faRankingStar} size={24} />
          </Pressable>
        </View>
        {/* <Button onPress={() => } /> */}
      </View>

      <View style={{flex: 4.5}}>
        {choice === 1 ? <MyListScreen /> : <RankScreen />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#1E293B',
    height: '100%',
    paddingTop: 36,
  },
  title: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 28,
  },
  textInButton: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginRight: 8,
  },
  buttonNavi: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    width: windowDimensions.width * 0.35,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
