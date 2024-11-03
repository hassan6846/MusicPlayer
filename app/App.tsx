import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

///navigation

//components
import LoginScreen from './screens/Auth/LoginScreen';
export default function App() {
  return (
    <LoginScreen />
  );
}
