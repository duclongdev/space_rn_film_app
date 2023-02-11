import {View, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View
      style={{
        height: 46,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        width: '100%',
        backgroundColor: '#10111A',
        borderBottomWidth: 0.5,
      }}>
      <Image
        source={require('../assets/SPACE.png')}
        style={{width: 100, height: 25, marginLeft: 20}}
      />
      <View style={{flexDirection: 'row', marginRight: 20}}>
        <Ionicons
          name={'search'}
          size={25}
          style={{color: 'white', marginRight: 15}}
        />
        <Image
          source={require('../assets/main_logo.png')}
          style={{width: 30, height: 30, borderRadius: 20, LeftRight: 20}}
        />
      </View>
    </View>
  );
};

export default Header;
