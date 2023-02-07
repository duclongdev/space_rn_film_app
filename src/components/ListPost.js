import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Card from './Card';
import {normalData} from '../utils/PostData';

const Header = () => {
  return (
    <View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            borderTopWidth: 0.5,
            borderBottomWidth: 0.5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              padding: 14,
              borderBottomWidth: 1.5,
              borderBottomColor: '#04DB41',
            }}>
            <FeatherIcon
              name="trending-up"
              size={16}
              style={{color: '#04DB41', marginRight: 6}}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: '#04DB41',
              }}>
              Thịnh hành
            </Text>
          </View>
          <View style={{flexDirection: 'row', padding: 14}}>
            <EntypoIcon
              name="new"
              size={16}
              style={{color: '#D4d4d4', marginRight: 6}}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: '#D4d4d4',
              }}>
              Mới
            </Text>
          </View>
          <View style={{flexDirection: 'row', padding: 14}}>
            <FontistoIcon
              name="comments"
              size={16}
              style={{color: '#D4d4d4', marginRight: 6}}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: '#D4d4d4',
              }}>
              Sôi nổi
            </Text>
          </View>
          <View style={{flexDirection: 'row', padding: 14}}>
            <EntypoIcon
              name="flag"
              size={16}
              style={{color: '#D4d4d4', marginRight: 6}}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: '#D4d4d4',
              }}>
              Tóp
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const ListPost = () => {
  return (
    <View>
      <Header />
      {normalData.map((item, index) => {
        return (
          <View key={item.id}>
            <Card data={item} />
          </View>
        );
      })}
      <View style={{height: 100}}></View>
    </View>
  );
};

export default ListPost;
