import React from 'react';
import { StyleSheet, View, Text, Button, Image} from 'react-native';


const BuyScreenC = (props) => {

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Buy / Rent</Text>
        <Image source={require('./images/image_backpack.jpg')} style={{width: 300, height: 300}}></Image>
        <Image source={require('./images/image_backpack.jpg')} style={{width: 300, height: 300}}></Image>
   </View>
    );
}

{/*Ikke oprettet endnu --> Potentielt til videreudvikling af MVP*/}
export default BuyScreenC;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        width: '100%',
        height: '100%',

    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 0,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#62bab5",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    },
});
