import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Alert, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as MediaLibrary from 'expo-media-library';

// Screens
import Settings from './Stacks/Settings';
import Liked from './Stacks/Liked';
import Music from './Stacks/Music';
import Video from './Stacks/Video';
import Player from './Features/Player';
import VideoPlayer from './Features/VideoPlayer';
import AllowPermissions from './Stacks/AllowPermissions';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const Main = () => {
  const [hasPermission, setHasPermission] = useState<any>(null);

  useEffect(() => {
    console.log(hasPermission)
    const checkPermissions = async () => {
      const { status } = await MediaLibrary.getPermissionsAsync();
      if (status !== 'granted') {
        const { status: newStatus } = await MediaLibrary.requestPermissionsAsync();
        if (newStatus !== 'granted') {
          Alert.alert(
            'Permission Required',
            'We need access to your media library to display music.',
            [{ text: 'OK' }]
          );
          setHasPermission(false);
        } else {
          setHasPermission(true);
        }
      } else {
        setHasPermission(true);
      }
    };

    checkPermissions();
  }, []);





  return (
  
      <Tab.Navigator shifting={true}>
        <Tab.Screen
      
          name="Music"
          component={Music}
          options={{
            
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="music" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Video"
          component={Video}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="play" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Liked"
          component={Liked}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cards-heart-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cog" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
  
   
  );
};
const App=()=>{
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown:false}}>
      <Stack.Screen  name="Main" component={Main} />
      <Stack.Screen name="Permissions" component={AllowPermissions} />
      <Stack.Screen  name="Player" component={Player} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
