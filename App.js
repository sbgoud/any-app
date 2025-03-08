import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import WebView from 'react-native-webview';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <WebView source={{ uri: 'https://www.x.com' }} style={{ flex: 1 }} />
    </View>
  );
}