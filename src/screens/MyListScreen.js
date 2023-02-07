import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const windowDimensions = Dimensions.get('window');

export default function MyListScreen() {
  const data = [
    {
      id: 1,
      verImage:
        'https://static.wikia.nocookie.net/disneythehunchbackofnotredame/images/9/92/Boruto_Anime.jpg/revision/latest?cb=20171105054251',
      image:
        'https://pic.bstarstatic.com/ogv/bb773a7dd56520ac4b27a9f7feaf4f3d5dda8f9f.png@720w_405h_1e_1c_1f.webp',
      title: 'Boruto the next generation',
      author: 'Masashi Kishimoto',
      genre: 'Adventure | Action',
      currentEps: '2/277',
      like: true,
      content:
        'The village hides under the leaves - the village of Leaves, which has progressed to modernization in peace. Boruto, son of Naruto Uzumaki, Hokage the Seventh, enrolled in Ninja Academy, a school that nurtured and trained ninjas. How will you meet your friends and challenge them when the mystery breaks out? The story of "Boruto Uzumaki" touching your heart like a wind will begin now!!',
    },
    {
      id: 2,
      verImage:
        'https://pic.bstarstatic.com/ogv/3bb26de5db520ecbf1e1384a250bdbe7484539a5.png@600w_800h_1e_1c_1f.webp',
      image:
        'https://pic.bstarstatic.com/ogv/64cbeb2058145f1eb1ec575f4ef7ec86a05531bc.png@720w_405h_1e_1c_1f.webp',
      title: 'Naruto Shippuden',
      author: 'Masashi Kishimoto',
      genre: 'Adventure | Action',
      currentEps: '380/500',
      like: true,
      content:
        'In Konoha, where the stones on Tsunade\'s face were increasing, the Konoha Legion, which had evolved into a Shinobi, was busy with a D-rank mission under Ebisu\'s charge. Dolphins laugh Face is like the shape of Naruto in the past... Naruto Uzumaki himself has grown a lot after a long journey through the Konoha gate! A fierce battle between the Naruto mobs and the mysterious organization "Akatsuki" of the S-rank offender has begun!',
    },
    {
      id: 3,
      verImage:
        'https://pic.bstarstatic.com/ogv/c39ea1bd938f0996ad3297839ebad75e1b61200a.jpg@600w_800h_1e_1c_1f.webp',
      image:
        'https://pic.bstarstatic.com/ogv/8fb92de3e88b08d3c4283d1b08fac25df5cadea0.png@720w_405h_1e_1c_1f.webp',
      title: 'One Piece',
      author: 'Oda Eiichiro',
      genre: 'Adventure | Action',
      currentEps: '2/277',
      like: false,
      content:
        "There once lived a pirate named Gol D. Roger who are Pirate King. When he was captured and about to be executed, he revealed that his treasure called One Piece was hidden somewhere at the Grand Line. This made all people set out to search and uncover the One Piece treasure, but no one ever found the location of Gol D. Roger's treasure, and the Grand Line was too dangerous a place to overcome. Twenty-two years after Gol D. Roger's death, a boy named Monkey D. Luffy decided to become a pirate and search for Gol D. Roger's treasure to become the next Pirate King.",
    },
    {
      id: 4,
      verImage:
        'https://pic.bstarstatic.com/ogv/a80bf07e470fa17921c5fa717b7ffe4add28ba69.png@600w_800h_1e_1c_1f.webp',
      image:
        'https://pic.bstarstatic.com/ogv/561b0ce01af1604517f5a5487c2c7156b203c389.jpg@720w_405h_1e_1c_1f.webp',
      title: 'SPY×FAMILY',
      author: 'Tatsuya Endo',
      genre: 'Comedy | Action',
      currentEps: '2/10',
      like: false,
      content:
        'A spy known only as Twilight needs a family as part of his undercover mission, so he quickly marries a city hall worker and adopts a child and dog. Unknown to him, his family has secrets of their own: his wife Yor is an undercover assassin, his daughter Anya is a runaway psychic who can read minds, and his dog was from a laboratory that gave him the power to tell the future. All these four subjects must bond together as a family to manage their own affairs and be together as best as they can.',
    },
    {
      id: 5,
      verImage:
        'https://pic.bstarstatic.com/ogv/5f96eb3ab0869f9cb49cc1e6c54e812a40bbee1a.jpg@600w_800h_1e_1c_1f.webp',
      image:
        'https://pic.bstarstatic.com/ugc/044c13a22edbae3f35d4e3de46d9e054.jpg@720w_405h_1e_1c_1f.webp',
      title: 'Eminence In Shadow',
      author: 'Daisuke Aizawa',
      genre: 'Dark fantasy | Isekai',
      currentEps: '2/8',
      like: true,
      content:
        'Ever since he was a child, he wanted to become a shadowbroker, a person who operates in the shadows. He trained up his body, doing practically everything possible in the world, until one day, he encountered magic. However, this was not magic and was in fact, the headlights of a car. And so, he died. Even after reincarnating, the boy, now the son of a noble, Cid Kagenou, wanted to achieve his dreams. After rescuing a girl, Cid creates an elaborate plot about how he was the leader of an ancient organization, sworn to fight the Cult of Diabolos, so as to prevent said cult from resurrecting Diabolos.',
    },
    {
      id: 6,
      verImage:
        'https://cdn.shopify.com/s/files/1/0549/5835/8762/products/Bleach__Thousand-Year_Blood_War_Anime_Manga.jpg?v=1662476632',
      image:
        'https://pic.bstarstatic.com/ogv/6638e4ada4fc056eaed63f060ec7cb4ec71e3ee8.png@720w_405h_1e_1c_1f.webp',
      title: 'Bleach: Thousand-year Blood War',
      author: 'Tite Kubo',
      genre: 'Adventure | Action',
      currentEps: '5/7',
      like: false,
      content:
        "The peace is suddenly broken when warning sirens blare through the Soul Society. Residents, there are disappearing without a trace and nobody knows who's behind it. Meanwhile, a dark shadow is also extending itself toward Ichigo and his friends in Karakura Town.",
    },
    {
      id: 7,
      verImage:
        'https://pic.bstarstatic.com/ogv/d96d9b25ee627b3123812962759de30e36245858.jpg@600w_800h_1e_1c_1f.webp',
      image:
        'https://sundial.csun.edu/wp-content/uploads/2022/04/E1t0jaoDjKNvu7o6KsnR86sr7k0VRtWMMeX4thfB-900x506.jpeg',
      title: 'Jujutsu Kaisen',
      author: 'Gege Akutami',
      genre: 'Adventure | Action',
      currentEps: '5/24',
      like: true,
      content:
        "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.",
    },
  ];

  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: '#2D3958',
        paddingHorizontal: 16,
        borderTopLeftRadius: 30,
      }}>
      <Text
        style={[
          styles.textInButton,
          {marginTop: 20, marginBottom: 20, fontWeight: '700'},
        ]}>
        Your List
      </Text>
      <ScrollView>
        {data.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => {
              navigation.navigate('Detail', {film: item});
            }}
            style={({pressed}) => [
              {backgroundColor: pressed ? '#25387D' : null},
              {flexDirection: 'row', marginBottom: 24, borderRadius: 10},
            ]}>
            <Image
              source={{uri: `${item.image}`}}
              style={{
                borderRadius: 10,
                width: '40%',
                height: 82,
                marginRight: 12,
              }}
            />
            <View style={{justifyContent: 'space-between'}}>
              <Text
                numberOfLines={1}
                style={[
                  styles.textContent,
                  {color: '#fff', fontWeight: '600'},
                ]}>
                {item.title}
              </Text>
              <Text style={[styles.textContent, {color: '#999'}]}>
                Up to 276 episodes
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={[styles.textContent, {color: '#999', marginRight: 8}]}>
                  Current eps:
                </Text>
                <Text style={[styles.textContent, {color: '#F9D410'}]}>
                  {item.currentEps}
                </Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textInButton: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginRight: 8,
  },
  textContent: {
    fontSize: 16,
    fontWeight: '500',
    maxWidth: windowDimensions.width * 0.5,
  },
});
