import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, SearchScreen, WatchListScreen} from '../screens';
import {COLORS} from '../utils';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          let iconName;
          let color;
          if (route.name === 'Video ngắn') {
            iconName = focused ? 'home' : 'videocam-outline';
            color = focused ? COLORS.main : COLORS.gray;
          } else if (route.name === 'Bài viết') {
            iconName = focused ? 'book' : 'book-outline';
            color = focused ? COLORS.main : COLORS.gray;
          } else if (route.name === 'Đã xem') {
            iconName = focused ? 'stopwatch' : 'stopwatch-outline';
            color = focused ? COLORS.main : COLORS.gray;
          }
          return <Icon name={iconName} size={24} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: COLORS.main,
        tabBarStyle: {
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: '#10111A',
          position: 'absolute',
          borderTopWidth: 0.5,
          borderTopColor: COLORS.gray,
          borderTopWidth: 0,
        },
      })}>
      <Tab.Screen name="Video ngắn" component={SearchScreen} />
      <Tab.Screen name="Bài viết" component={HomeScreen} />
      <Tab.Screen name="Đã xem" component={WatchListScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
