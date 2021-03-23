//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './screens/home';
import AppLoading from 'expo-app-loading'
import { useFonts, PlayfairDisplay_400Regular } from '@expo-google-fonts/playfair-display'

export default function App() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <Home />
  );
}

