
import "react-native-gesture-handler"
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Pages 
import Home from './Page/Home';
import Discover from './Page/Discover';
import Profile from './Page/Profile';

// Navigation 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { bottomTabs, TabHeight } from "./utils/BottomTabs";
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
    <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}
