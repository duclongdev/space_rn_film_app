import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const InfoUser = ({data}) => {
  return (
    <View style={{flexDirection: 'row', marginVertical: 4, marginTop: 6}}>
      <Image
        source={{
          uri: data.uri,
        }}
        style={{height: 20, width: 20, borderRadius: 20}}
      />
      <Text style={{color: 'white', marginLeft: 6}}>{data.name}</Text>
    </View>
  );
};

const Card = ({data}) => {
  const navigate = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigate.navigate('PostDetail');
      }}>
      <View
        style={{
          width: '100%',
          padding: 10,
          borderBottomWidth: 0.5,
          borderBottomColor: '#d4d4d4',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 2}}>
            <InfoUser data={data.user} />
            <Text style={{fontSize: 16, fontWeight: '600', color: 'white'}}>
              {data.title}
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Image
              source={{
                uri: data.uri,
              }}
              style={{width: '100%', height: 110, borderRadius: 5}}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <AntIcon name="like2" size={20} style={{color: '#d4d4d4'}} />
            <Text style={{marginLeft: 15, color: '#d4d4d4'}}>{data.like}</Text>
            <FAIcon
              name="comment-o"
              size={20}
              style={{color: '#d4d4d4', marginLeft: 20}}
            />
            <Text style={{marginLeft: 15, color: '#d4d4d4'}}>
              {data.comment}
            </Text>
          </View>
          <View>
            <FeatherIcon name="bookmark" size={20} style={{color: '#d4d4d4'}} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;
