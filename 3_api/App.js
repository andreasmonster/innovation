import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ArrayListComponent from './components/ArrayListComponent';
import FetchListComponent from './components/FetchListComponent';
import FlatListComponent from './components/FlatListComponent';

import {CARS} from './const';
import {COUNTRIES} from './const';
import {GET_USERS_URL} from './const';

console.log(CARS);
console.log(COUNTRIES)
console.log(GET_USERS_URL)

export default function App() {
  return (
    <View style={styles.container}>
      <ArrayListComponent></ArrayListComponent>
      <FetchListComponent></FetchListComponent>
      <FlatListComponent></FlatListComponent>
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
