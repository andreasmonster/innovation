import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, Alert } from 'react-native';

export default function App() {
  return (


    <View style={styles.container}>
      <Text>Hello World</Text>
      <Button
        color="#f194ff"
        title="Tryk på mig"
        onPress={() => Alert.alert('Du trykkede på knappen')}
      />
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
