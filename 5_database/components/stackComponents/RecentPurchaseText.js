import { Background } from '@react-navigation/elements';
import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import FlatListComponent_Purchase from '../flatcomponents/FlatListComponent_Purchase';




{/*Kalder på vores FlatListcomponent til dette view*/}
const RecentPurchaseText = ({navigation}) => {
    return (
            <View style={styles.container}>
                <FlatListComponent_Purchase></FlatListComponent_Purchase> 
            </View>
    );
}



const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: "100%",
        height: '100%',
        backgroundColor: 'white'
    },
    tekst: {

    },
    
});

export default RecentPurchaseText;