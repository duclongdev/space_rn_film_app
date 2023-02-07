import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    url: 'https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
    name: 'Vua hải tặc',
    status: 'Trọn bộ',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    url: 'https://i.pinimg.com/originals/3a/cb/d6/3acbd6644c9d05dd7e4064bfd77f8ae1.jpg',
    name: 'Conan',
    status: 'Trọn bộ',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    hihi: 'hihi',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    hihi: 'hihi',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Itemmmm',
    hihi: 'hihi',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    hihi: 'hihi',
  },
];
const Item = ({movie}) => (
  <View style={styles.item}>
    <View>
      <Image
        style={{height: 170, flex: 1, resizeMode: 'cover', borderRadius: 10}}
        source={{
          uri: movie.url,
        }}
      />
      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', 'rgba(36, 37, 38, 1)']}
        style={styles.linearGradient}>
        <Text style={styles.status}>{movie.status}</Text>
      </LinearGradient>
    </View>
    <Text>{movie.name}</Text>
  </View>
);
const ListFilm = () => {
  const renderItem = ({item}) => <Item movie={item} />;
  return (
    <ScrollView>
      <FlatList
        data={DATA}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{marginHorizontal: 4}}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    marginVertical: 2,
    marginHorizontal: 4,
    flex: 1,
  },
  title: {
    fontSize: 32,
  },
  linearGradient: {
    width: '100%',
    paddingLeft: 10,
    borderRadius: 5,
    position: 'absolute',
    zIndex: 10,
    bottom: 0,
  },
  status: {
    color: 'white',
    marginBottom: 2,
    fontWeight: '600',
    paddingTop: 20,
  },
});
export default ListFilm;
