
import "react-native-gesture-handler"
import React from 'react';
import { StatusBar } from 'expo-status-bar';


// Pages 
import Home from './Page/Home';
import Discover from './Page/Discover';
import Profile from './Page/Profile';
import PlayerPage from "./Page/PlayerPage";

// Navigation 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { bottomTabs, TabHeight } from "./utils/BottomTabs";
import TracksPage from "./Page/TracksPage";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Main Entry
const Main = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, tabBarStyle: { height: TabHeight } }} initialRouteName="Home">
      <Tab.Screen options={{ tabBarIcon: bottomTabs.Home.Svg, headerShadowVisible: false }} name="Home" component={Home} />
      <Tab.Screen options={{ tabBarIcon: bottomTabs.Browse.Svg, headerShadowVisible: false, headerTitle: "Discover", headerTitleAlign: "center" }} name="Discover" component={Discover} />
      <Tab.Screen options={{ tabBarIcon: bottomTabs.Profile.Svg, headerShadowVisible: false, headerTitle: "My Music", headerTitleAlign: "center" }} name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};


export default function App() {
  return (
    <NavigationContainer >

      <Stack.Navigator >

        <Stack.Screen name="Main" options={{ headerShown: false }} component={Main} />

        <Stack.Screen name="Player" options={{ headerShown: true, presentation: "modal", headerShadowVisible: false, headerTitleAlign: "center", headerTitle: "Now Playing", cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS }} component={PlayerPage} />
        <Stack.Screen name="Tracks" options={{ headerShown: true, presentation: "modal", headerShadowVisible: false, headerTitleAlign: "center", headerTitle: "Now Playing", cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS }} component={TracksPage} />

      </Stack.Navigator>
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}
