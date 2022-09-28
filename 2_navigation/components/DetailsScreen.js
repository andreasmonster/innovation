import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

const navController = (navigation, route) => {
    navigation.navigate(route)
}

function DetailsScreenC ({navigation}) {
    return (
            <View style={styles.container}>
                <Text>Tekst DetailsScreen</Text>
                <Button title="Go to Screen One" onPress={() => navController(navigation, 'ScreenOne')}/> 
                <Button title="Go to Screen Two?" onPress={() => navController(navigation, 'ScreenTwo')}/> 
            </View>
    );
}



{/*HUSK AT SKIFTE NAVN*/}
export default DetailsScreenC;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
