import {ScrollView, View, Text} from 'react-native';
import React from 'react';
import Banner from '../components/Banner';
import ListPost from '../components/ListPost';
import Header from '../components/Header';

const Home = () => {
  return (
    <View style={{backgroundColor: '#1E293B'}}>
      <Header />
      <ScrollView>
        <Banner />
        <ListPost />
      </ScrollView>
    </View>
  );
};

export default Home;
