import { white } from 'color-name';
import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

{/*Ikke oprettet endnu --> Potentielt til videreudvikling af MVP*/}
const ProfileScreenC = (props) => {

    return (
            <View style={styles.container}>
                 <Text style={styles.title}>Profile</Text>
                 <Button title="Change Password"/>
                 <Button title="Change Email"/>
                 <Button title="Contact Us"/>
                 <Button title="Logout"/>
            </View>
    );
}

{/*Ikke oprettet endnu --> Potentielt til videreudvikling af MVP*/}
export default ProfileScreenC;

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
