import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/AntDesign';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const windowDimensions = Dimensions.get('window');

const ItemSwipe = ({data}) => {
  return (
    <View>
      <Image
        source={{
          uri: data.uri,
        }}
        style={{
          width: windowDimensions.width * 0.9,
          height: 250,
          borderRadius: 10,
        }}
      />

      <Text style={{color: 'white', marginVertical: 6}}>
        {data.catalog} | <Text style={{color: '#D4D4D4'}}>8 phút</Text>
      </Text>
      <Text style={{fontSize: 20, color: 'white', fontWeight: '600'}}>
        {data.title}
      </Text>
      <Text style={{fontSize: 16, color: '#D4D4D4'}}>
        {data.des.length > 125 ? data.des.slice(0, 125) + ' ...' : data.des}
      </Text>
      <View
        style={{
          marginTop: 6,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{
              uri: data.user.imgUri,
            }}
            style={{
              width: 30,
              height: 30,
              borderRadius: 99,
              overflow: 'hidden',
            }}
          />

          <Text
            style={{
              alignSelf: 'center',
              marginLeft: 6,
              color: 'white',
              fontWeight: '600',
            }}>
            {data.user.name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="caretup" size={18} style={{color: '#D4D4D4'}} />
          <Text style={{marginHorizontal: 7, color: 'white', fontSize: 12}}>
            {data.like}
          </Text>
          <FAIcon name="eye" size={18} style={{color: '#D4D4D4'}} />
          <Text style={{marginHorizontal: 7, color: 'white', fontSize: 12}}>
            {data.eye}
          </Text>
          <FAIcon name="comment-o" size={18} style={{color: '#D4D4D4'}} />
          <Text style={{marginHorizontal: 7, color: 'white', fontSize: 12}}>
            {data.comment}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ItemSwipe;
