import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';


const BuyScreenC = (props) => {

    return (
            <View style={styles.container}>
               {
                <Text>Tekst Fra BuyScreen</Text>
               }
            </View>
    );
}

{/*Ikke oprettet endnu --> Potentielt til videreudvikling af MVP*/}
export default BuyScreenC;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#34c6eb',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
});
