import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';


const navController = (navigation, route) => {
    navigation.navigate(route)
}

{/*HUSK AT SKIFTE NAVN*/}
const ScreenOne = ({navigation}) => {
    return (
            <View style={styles.container}>
                <Text>Tekst DetailsScreen</Text>
                <Button title={"Go to Screen Two"} onPress={() => navController(navigation, 'ScreenTwo')}/> 
            </View>
    );
}

//  <Button title={"Go to Screen Two"} onPress={() => navController(navigation, 'ScreenTwo')}/> 

{/*HUSK AT SKIFTE NAVN*/}
export default ScreenOne;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF032',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
