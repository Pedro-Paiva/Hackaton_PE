import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StatusBar } from 'react-native';
import firebase from './src/services/firebaseConnection';
import Routes from './src/routes/index';

export default function App() {
 return (
   <NavigationContainer>
     <StatusBar backgroundColor = " #131313 " barStyle = "light-content"/>
      <Text> Score Detran! </Text>
      <Routes/>
   </NavigationContainer>
  );
}