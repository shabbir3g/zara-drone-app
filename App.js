import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import Drones from './assets/Components/Drones/Drones';
import Header from './assets/Components/Header/Header';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Drones />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
