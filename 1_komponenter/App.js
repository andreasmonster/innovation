import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonComponent from './components/ButtonComponent';
import FirstComponent from "./components/FirstComponent"; // Importerer FirstCompoent fra First FirstComponent Mappen.
import PropsComponent from "./components/PropsComponent"; // Importerer FirstCompoent fra First FirstComponent Mappen.
import InputComponent from "./components/InputComponent"; // Importerer FirstCompoent fra First FirstComponent Mappen.
import AssetComponent from "./components/AssetComponent";
import FirstImage from "./assets/favicon.png" // Billedet som bliver importeret, fra assets mappen

export default function App() {
  return (
    //Importeret FirstComponent og PropsComponent.
    // Definerer, at name variablen skal være Andreas. Variablen for teksten før 'Andreas', er defineret i PropsComponentjs Mappen.
    <View style={styles.container}>
      <FirstComponent></FirstComponent>
      <PropsComponent name={'Andreas'}/>
      <ButtonComponent></ButtonComponent>
      <InputComponent></InputComponent>
      <AssetComponent url={FirstImage}/>

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
