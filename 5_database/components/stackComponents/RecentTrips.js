import { Background } from '@react-navigation/elements';
import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import FlatListComponent_Trips from '../flatcomponents/FlatListComponent_Trips';




{/*Kalder på vores FlatListcomponent til dette view*/}
const RecentTrips = ({navigation}) => {
    return (
            <View style={styles.container}>
                <FlatListComponent_Trips></FlatListComponent_Trips> 
            </View>
    );
}


{/*HUSK AT SKIFTE NAVN*/}


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

export default RecentTrips;