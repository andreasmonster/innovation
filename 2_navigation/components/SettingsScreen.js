import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

{/*HUSK AT SKIFTE NAVN*/}
const SettingsScreenC = (props) => {

    return (
            <View style={styles.container}>
               {
                <Text>Tekst Fra HomeScreenC</Text>
               }
            </View>
    );
}

{/*HUSK AT SKIFTE NAVN*/}
export default SettingsScreenC;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
