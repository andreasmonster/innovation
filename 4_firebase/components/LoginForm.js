import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button, ActivityIndicator } from 'react-native';
import firebase from "firebase/compat";
import { useState } from "react";




export default function LoginForm() {
    const handleLogin = async() => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password).then((data)=>{
        });
    } catch (error){
        setErrorMessage(error.message)

    }

}
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isComplete, setisComplete] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)
    const activateButton = () => {
  return <Button title="signup" onPress={()=> handleLogin()} /> 
};

  return (

    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
     <TextInput
          placeholder="email"
          value={email}
          onChangeText={(email) => setEmail(email)}
          style={styles.inputField}
      /> 
    <TextInput
          placeholder="password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          style={styles.inputField}
      /> 
      <StatusBar style="auto" />
      
      {errorMessage && (
                <Text style={styles.error}>Error: {errorMessage}</Text>
            )}
            {activateButton()}
    </View>
  );
}

//Lokal styling til brug i SignUpForm
const styles = StyleSheet.create({
    error: {
        color: 'red',
    },
    inputField: {
        borderWidth: 1,
        margin: 10,
        padding: 10,
    },
    header: {
        fontSize: 40,
    },
});
