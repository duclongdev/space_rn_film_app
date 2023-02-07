import React from 'react';
import {
  Button,
  FlatList,
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

export default function RankScreen() {
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

  const latest = [
    {
      id: 1,
      verImage:
        'https://cdn.myanimelist.net/images/about_me/ranking_items/8245034-57e14855-7109-4684-8b7c-98ea268dd0f1.jpg?t=1672431522',
      image:
        'https://cdn-cf.ginx.tv/respawn-cdn/kVI_Yz_rt_11_dpvEX5s8zgDHcwMRM2Z_voHVd0r_Bo/fill/1280/0/no/1/aHR0cHM6Ly93d3cuZ2lueC50di91cGxvYWRzMi9OZXRmbGl4L2N5YmVycHVua19lZGdlcnVubmVycy9uZXRmbGl4X2N5YmVycHVua19lZGdlcnVubmVyc19yZXZpZXcuanBn.webp',
      title: 'Cyberpunk: Edgerunners',
      author: 'Rafał Jaki',
      genre: 'Cyberpunk | TV Series',
      currentEps: '0/1',
      like: true,
      content:
        'A Street Kid trying to survive in a technology and body modification-obsessed city of the future. Having everything to lose, he chooses to stay alive by becoming an Edgerunner, a Mercenary outlaw also known as a Cyberpunk.',
    },
    {
      id: 2,
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
      id: 3,
      verImage:
        'https://resizing.flixster.com/b_iMzsB6inR_e8s0Wl1_JI1OSi4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vMDBmODc2YTEtY2Y5Ny00NWJkLTliMTEtMTY3NjE5MWIyM2ZlLnBuZw==',
      image:
        'https://img3.hulu.com/user/v3/artwork/7b71b5a4-560b-4d8b-98c4-c5dee6004c21?base_image_bucket_name=image_manager&base_image=204c7e0e-a0bd-45fc-a7ff-5b6a60c90d62&region=US&format=jpeg&size=952x536',
      title: 'Chainsaw Man',
      author: 'Tatsuki Fujimoto',
      genre: 'Adventure | Action',
      currentEps: '3/12',
      like: false,
      content:
        "When his father died, Denji was stuck with a huge debt and no way to pay it back. Thanks to a Devil dog he saved named Pochita, he's able to survive through odd jobs and killing Devils for the Yakuza. Pochita's chainsaw powers come in handy against these powerful demons. When the Yakuza betrays him and he's killed by the Zombie Devil, Pochita sacrifices himself to save his former master. Now Denji has been reborn as some kind of weird Devil-Human hybrid. He is now a Chainsaw Man!",
    },
    {
      id: 4,
      verImage:
        'https://cdn.shopify.com/s/files/1/0274/1056/3133/products/FIGFP3463_1_800x.jpg?v=1621256470',
      image: 'https://m.media-amazon.com/images/I/81eng4YeGdL.jpg',
      title: 'Attack on Titan SS4',
      author: 'Hajime Isayama',
      genre: 'Fantasy | Adventure',
      currentEps: '1/28',
      like: false,
      content:
        'Humans are nearly exterminated by giant creatures called Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a land protected by extremely high walls, even taller than the biggest of titans. Flash forward to the present, and mankind has not seen a titan in over 100 years. One day, 10 year old Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a colossal titan that appears out of thin air. As the smaller titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single titan and take revenge for all of mankind.',
    },
    {
      id: 5,
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
      id: 6,
      verImage:
        'https://m.media-amazon.com/images/M/MV5BYzlhYzEwNDctMTY1ZC00M2JiLWIzZTAtMWE5YzBkODIwNDgwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
      image: 'https://i.ytimg.com/vi/WLzmLUtVkxA/maxresdefault.jpg',
      title: 'Kotaro Lives Alone',
      author: 'Mami Tsumura',
      genre: 'Anime Series',
      currentEps: '1/10',
      like: false,
      content:
        'A lonely little boy moves into a ramshackle apartment building all on his own and makes friends with the broke manga artist who lives next door.',
    },
    {
      id: 7,
      verImage:
        'https://pic.bstarstatic.com/ogv/85b42f0b22fd5d3527850ffbbb1669e94444d934.jpg@600w_800h_1e_1c_1f.webp',
      image:
        'https://img1.ak.crunchyroll.com/i/spire2/452f17d459c32e6bf6c2609404efb24a1655033790_main.png',
      title: 'Dr. Stone: Ryusui',
      author: 'Boichi, Riichiro Inagaki',
      genre: 'Sci-fi | Action',
      currentEps: '1/2',
      like: false,
      content:
        'After the world turns to stone—literally sending it back to the stone—the son of a famous astronaut sets out to restore the Earth to its scientific glory. In Ryusui, a special spinoff released this summer, he comes in contact with a skilled sailor and the revival of money. Will the reintroduction of greed and wealth destroy his chances at scientific progress?',
    },
  ];

  const mostView = [
    {
      id: 1,
      verImage:
        'https://m.media-amazon.com/images/M/MV5BNzJhMDY2NzUtYzE2Ny00YWVmLWI3YjQtODk2ZWQzYmEwMzJiXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
      image:
        'https://cdn.animenewsnetwork.com/thumbnails/max1000x1500/cms/news/132407/kimetsu_visualhorizontal.jpg',
      title: 'Demon Slayer: Kimetsu no Yaiba',
      author: 'Koyoharu Gotouge',
      genre: 'Adventure | Action',
      currentEps: '1/26',
      like: true,
      content:
        "After a demon attack leaves his family slain and his sister cursed, Tanjiro embarks upon a perilous journey to find a cure and avenge those he's lost.",
    },
    {
      id: 2,
      verImage:
        'https://images-na.ssl-images-amazon.com/images/I/919yVqvSRmL._AC_UL900_SR615,900_.jpg',
      image:
        'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f0e5bedfe6abd573766b7f5abdc378724814098c963f3cda0891f932757d7787._RI_V_TTW_.jpg',
      title: 'My Dress-Up Darling',
      author: 'Tomohisa Taguchi',
      genre: 'Romantic | Comedy',
      currentEps: '0/12',
      like: true,
      content:
        "High schooler Wakana Gojou cares about one thing: making Hina dolls. With nobody to share his obsession, he has trouble finding friends or even holding conversation. But after the school's most popular girl, Marin Kitagawa, reveals a secret of her own, he discovers a new purpose for his sewing skills. Together, they'll make her cosplay dreams come true.",
    },
    {
      id: 3,
      verImage:
        'https://resizing.flixster.com/7FxWIMZzGWQTnMirqa17wYfbxOg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvNmQwNWMwZDYtNmJmOS00MTZjLWIzOTItZDRkMTY0MmNhM2NjLmpwZw==',
      image:
        'https://www.japancuriosity.com/wp-content/uploads/2022/03/the-orbital-children-wide.jpeg',
      title: 'The Orbital Children',
      author: 'Mitsuo Iso',
      genre: 'Sci-fi | Action',
      currentEps: '0/6',
      like: true,
      content:
        'The story takes place in the year 2045 in outer space, where AI, the internet and social networking sites are widespread. A massive accident occurs on a newly opened Japanese commercial space station, and a group of children are left behind. With no hope of rescue from adults, their lifeline is a barely surviving narrowband, a social network, a free application of low-intelligence AI and a drone controlled by a AR-based mobile device called "Smart". Will they be able to use these tools to survive the crisis?',
    },
    {
      id: 4,
      verImage:
        'https://resizing.flixster.com/b_iMzsB6inR_e8s0Wl1_JI1OSi4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vMDBmODc2YTEtY2Y5Ny00NWJkLTliMTEtMTY3NjE5MWIyM2ZlLnBuZw==',
      image:
        'https://img3.hulu.com/user/v3/artwork/7b71b5a4-560b-4d8b-98c4-c5dee6004c21?base_image_bucket_name=image_manager&base_image=204c7e0e-a0bd-45fc-a7ff-5b6a60c90d62&region=US&format=jpeg&size=952x536',
      title: 'Chainsaw Man',
      author: 'Tatsuki Fujimoto',
      genre: 'Adventure | Action',
      currentEps: '3/12',
      like: false,
      content:
        "When his father died, Denji was stuck with a huge debt and no way to pay it back. Thanks to a Devil dog he saved named Pochita, he's able to survive through odd jobs and killing Devils for the Yakuza. Pochita's chainsaw powers come in handy against these powerful demons. When the Yakuza betrays him and he's killed by the Zombie Devil, Pochita sacrifices himself to save his former master. Now Denji has been reborn as some kind of weird Devil-Human hybrid. He is now a Chainsaw Man!",
    },
    {
      id: 5,
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
      id: 6,
      verImage:
        'https://m.media-amazon.com/images/I/51+3Z+insOL._AC_SY780_.jpg',
      image:
        'https://w0.peakpx.com/wallpaper/690/421/HD-wallpaper-anime-blue-lock-bachira-meguru-chigiri-hyouma.jpg',
      title: 'Blue Lock',
      author: 'Rafał Jaki',
      genre: 'Cyberpunk | TV Series',
      currentEps: '0/1',
      like: true,
      content: '',
    },
    {
      id: 7,
      verImage:
        'https://en-images.kinorium.com/movie/1080/1682616.jpg?1538983350',
      image:
        'https://i0.wp.com/www.thebulletintime.com/wp-content/uploads/2021/06/Goblin-Slayer-Season-2.jpg?fit=650%2C366&ssl=1',
      title: 'Goblin Slayer season 2',
      author: 'Rafał Jaki',
      genre: 'Cyberpunk | TV Series',
      currentEps: '0/1',
      like: true,
      content: '',
    },
    {
      id: 8,
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
  ];

  const navigation = useNavigation();

  return (
    <ScrollView style={{paddingHorizontal: 16}}>
      {/* Hot this week */}
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 12,
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/flame.png')}
            style={{width: 24, height: 24, marginRight: 8}}
          />
          <Text style={styles.textInButton}>Hot This Week</Text>
        </View>
        <ScrollView horizontal>
          <FlatList
            scrollEnabled={false}
            data={data}
            keyExtractor={item => item.id}
            contentContainerStyle={{
              alignSelf: 'flex-start',
            }}
            numColumns={Math.ceil(data.length / 2)}
            renderItem={({item}) => (
              <Pressable
                style={{marginBottom: 12}}
                key={item.id}
                onPress={() => {
                  navigation.navigate('Detail', {film: item});
                }}>
                <Image source={{uri: `${item.image}`}} style={styles.image} />
                <Text style={styles.titleContent}>{item.title}</Text>
              </Pressable>
            )}
          />
        </ScrollView>
      </View>

      {/* Latest lists */}
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 12,
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/new.png')}
            style={{width: 24, height: 24, marginRight: 8}}
          />
          <Text style={styles.textInButton}>Latest Lists</Text>
        </View>
        <ScrollView horizontal>
          <FlatList
            scrollEnabled={false}
            data={latest}
            keyExtractor={item => item.id}
            contentContainerStyle={{
              alignSelf: 'flex-start',
            }}
            numColumns={Math.ceil(data.length / 2)}
            renderItem={({item}) => (
              <Pressable
                style={{marginBottom: 12}}
                key={item.id}
                onPress={() => {
                  navigation.navigate('Detail', {film: item});
                }}>
                <Image source={{uri: `${item.image}`}} style={styles.image} />
                <Text style={styles.titleContent}>{item.title}</Text>
              </Pressable>
            )}
          />
        </ScrollView>
      </View>

      {/* Most View */}
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 12,
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/star.png')}
            style={{width: 24, height: 24, marginRight: 8}}
          />
          <Text style={styles.textInButton}>Most Views</Text>
        </View>
        <ScrollView horizontal>
          <FlatList
            scrollEnabled={false}
            data={mostView}
            keyExtractor={item => item.id}
            contentContainerStyle={{
              alignSelf: 'flex-start',
            }}
            numColumns={Math.ceil(data.length / 2)}
            renderItem={({item}) => (
              <Pressable
                style={{marginBottom: 12}}
                key={item.id}
                onPress={() => {
                  navigation.navigate('Detail', {film: item});
                }}>
                <Image source={{uri: `${item.image}`}} style={styles.image} />
                <Text style={styles.titleContent}>{item.title}</Text>
              </Pressable>
            )}
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textInButton: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginRight: 8,
  },
  titleContent: {
    fontSize: 16,
    color: '#999',
    fontWeight: '500',
    width: windowDimensions.width * 0.4,
    textAlign: 'center',
  },
  image: {
    borderRadius: 10,
    width: windowDimensions.width * 0.4,
    height: 82,
    marginRight: 12,
    marginBottom: 8,
  },
});
