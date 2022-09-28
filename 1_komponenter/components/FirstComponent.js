import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

{/*HUSK AT SKIFTE NAVN*/}
const FirstComponent = (props) => {

    return (
            <View style={styles.container}>
               {
                <Text>Fra Component Mappen</Text>
               }
            </View>
    );
}

{/*HUSK AT SKIFTE NAVN*/}
export default FirstComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
