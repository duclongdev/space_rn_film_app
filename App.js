import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './src/navigator/BottomTabNav';
import DetailScreen from './src/screens/DetailScreen';
import PostDetail from './src/screens/PostDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={BottomTab} />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PostDetail"
          component={PostDetail}
          options={{headerShow: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
