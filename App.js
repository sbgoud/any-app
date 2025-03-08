import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import WebView from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />
      <View style={{ flex: 1 }}>
        <WebView source={{ uri: 'https://www.x.com' }} style={{ flex: 1 }} />
      </View>
    </SafeAreaView>
  );
}