import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import VideoPlayer from 'react-native-video-player';

const windowDimensions = Dimensions.get('window');

export default function DetailScreen({route}) {
  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.body}>
      <Pressable style={styles.buttonBack} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back-outline" size={32} color={'#FF9D00'} />
      </Pressable>

      {/* overlay on image */}
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={{
          position: 'absolute',
          zIndex: 1,
          width: '100%',
          height: windowDimensions.height * 0.7,
          top: 0,
        }}></LinearGradient>

      <Image
        source={{uri: `${route.params.film.verImage}`}}
        style={styles.image}
      />

      {/* Content */}
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.content}>
        <Text style={styles.title}>{route.params.film.title}</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
          }}>
          <Text style={{color: '#F9D410', fontSize: 18}}>
            {route.params.film.author}
          </Text>
          <Text style={{color: '#fff', fontSize: 18, opacity: 0.7}}>
            {route.params.film.genre}
          </Text>
        </View>

        <View style={{height: windowDimensions.height * 0.26}}>
          <ScrollView>
            <Text
              style={{
                color: '#fff',
                textAlign: 'justify',
                fontSize: 18,
                opacity: 0.7,
              }}>
              {route.params.film.content}
            </Text>
          </ScrollView>
        </View>

        <View
          style={{
            position: 'absolute',
            width: windowDimensions.width,
            bottom: 16,
            paddingHorizontal: 20,
          }}>
          <View style={{flexDirection: 'row', marginBottom: 16}}>
            <Text style={{color: '#fff', fontSize: 18, fontWeight: '600'}}>
              Current epsiode:{' '}
            </Text>
            <Text style={{color: '#F9D410', fontSize: 18}}>
              {route.params.film.currentEps}
            </Text>
          </View>

          <View style={styles.optionBar}>
            <Icon name="ios-heart-outline" size={36} color={'#fff'} />

            <Pressable style={styles.buttonInOptionBar}>
              <Icon name="play-outline" size={36} color={'#000'} />
              <Text style={{fontSize: 22, fontWeight: '600', color: '#000'}}>
                Play
              </Text>
            </Pressable>

            <Pressable onPress={toggleModal}>
              <Image
                source={require('../assets/movieW.png')}
                style={{width: 36, height: 36}}
              />
            </Pressable>
          </View>
        </View>
      </LinearGradient>

      <Modal
        style={{margin: 0}}
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}>
        <View style={styles.modal}>
          <VideoPlayer
            video={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            videoWidth={windowDimensions.width}
            videoHeight={windowDimensions.height * 0.32}
            autoplay
            showDuration
          />
          <Pressable
            style={[
              styles.buttonInOptionBar,
              {position: 'absolute', top: '70%', left: '32%'},
            ]}
            onPress={toggleModal}>
            <Text style={{fontWeight: '700', fontSize: 20, color: '#000'}}>
              Close
            </Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    height: '100%',
  },
  buttonBack: {
    backgroundColor: '#D9D9D9',
    opacity: 0.7,
    position: 'absolute',
    top: 0,
    left: 0,
    marginTop: 16,
    marginLeft: 16,
    borderRadius: 40 / 2,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  image: {
    height: windowDimensions.height * 0.7,
  },
  content: {
    position: 'absolute',
    bottom: 0,
    height: windowDimensions.height * 0.55,
    width: windowDimensions.width,
    paddingHorizontal: 20,
    zIndex: 3,
  },
  title: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
  },
  optionBar: {
    borderRadius: 10,
    backgroundColor: '#999',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonInOptionBar: {
    backgroundColor: '#01FF45',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: windowDimensions.width * 0.35,
  },
  modal: {
    width: windowDimensions.width,
    height: windowDimensions.height * 0.5,
  },
});
