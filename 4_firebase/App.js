import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm'
import firebase from 'firebase/compat';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1oxKt0WTmnPGAs2d9NMKpFv6iuPakNrg",
  authDomain: "fir-ae932.firebaseapp.com",
  projectId: "fir-ae932",
  storageBucket: "fir-ae932.appspot.com",
  messagingSenderId: "911705180431",
  appId: "1:911705180431:web:b8d3204ae8626c3ac0167a",
  measurementId: "G-NSNVZ0CCTR"
};



export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  return (

    <View style={styles.container}>
    <SignUpForm/>
    <LoginForm/>
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
  inputField:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title:{
    color: 'black',
    fontSize: 40,
    fontWeight:'600',
  },
});



