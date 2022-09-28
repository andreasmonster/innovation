import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

{/*HUSK AT SKIFTE NAVN*/}
const PropsComponent = (props) => {
const {name} = props
    return (
            <View style={styles.container}>
               {
                <Text> Hello {props.name}</Text> //props.name fra variablen const name = props
               }
            </View>
    );
}

{/*HUSK AT SKIFTE NAVN*/}
export default PropsComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


// over return funktionen. Og lav nu et <Text></Text> element som indeholder en prop, der kaldes "name". 
// name modtager argumentet, {name}, hvorefter denne importeres i App.js - på samme måde, som med FirstComponent.