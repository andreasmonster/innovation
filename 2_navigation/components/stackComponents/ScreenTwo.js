import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';




{/*HUSK AT SKIFTE NAVN*/}
const ScreenTwo = ({navigation}) => {
    return (
            <View style={styles.container}>
                <Text>Tekst DetailsScreen</Text>
                <Button title={"Go Back"} onPress={() => navigation.goBack()}/> 
            </View>
    );
}



{/*HUSK AT SKIFTE NAVN*/}
export default ScreenTwo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
