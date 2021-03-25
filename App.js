//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading'
import { useFonts, PlayfairDisplay_400Regular } from '@expo-google-fonts/playfair-display'
import Navigator from './routes/drawer'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  );
}

