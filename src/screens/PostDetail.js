import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EviIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Body from '../components/Body';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: '#d4d4d4',
      }}>
      <Pressable onPress={() => navigation.goBack()}>
        <AntIcon name="arrowleft" size={22} style={{color: 'white'}} />
      </Pressable>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: '600',
            marginRight: 15,
          }}>
          Theo dõi
        </Text>
        <EntypoIcon
          name="dots-three-vertical"
          size={22}
          style={{color: 'white'}}
        />
      </View>
    </View>
  );
};

const Bottom = () => {
  const [like, setLike] = useState(12);
  return (
    <View
      style={{
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 55,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderTopWidth: 0.5,
        borderColor: '#f4f4f4',
        backgroundColor: '#1E293B',
      }}>
      <Pressable onPress={() => setLike(13)}>
        <AntIcon
          name="like2"
          size={22}
          style={{color: like === 12 ? 'white' : '#04DB41'}}
        />
      </Pressable>
      <Text
        style={{
          marginHorizontal: 20,
          color: 'white',
          fontWeight: '600',
          fontSize: 16,
        }}>
        {like}
      </Text>
      <AntIcon name="dislike2" size={22} style={{color: 'white'}} />
      <View
        style={{
          width: 1,
          backgroundColor: '#d4d4d4',
          marginHorizontal: 10,
        }}></View>
      <EviIcon name="comment-o" size={22} style={{color: 'white'}} />
      <Text
        style={{
          marginHorizontal: 10,
          color: 'white',
          fontWeight: '600',
          fontSize: 16,
        }}>
        10
      </Text>
      <View
        style={{
          width: 1,
          backgroundColor: '#d4d4d4',
          marginHorizontal: 10,
        }}></View>
      <FeatherIcon name="bookmark" size={22} style={{color: 'white'}} />
      <View
        style={{
          width: 1,
          backgroundColor: '#d4d4d4',
          marginHorizontal: 10,
        }}></View>
      <AntIcon name="sharealt" size={22} style={{color: 'white'}} />
    </View>
  );
};

const PostDetail = () => {
  return (
    <View style={{backgroundColor: '#1E293B'}}>
      <Header />
      <Body />
      <Bottom />
    </View>
  );
};

export default PostDetail;
