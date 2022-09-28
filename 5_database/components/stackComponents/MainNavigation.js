import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';


const navController = (navigation, route) => {
    navigation.navigate(route)
}

{/*Landing page for profile, som router med onPress funktion til nav siderne*/}
const MainNavigation = ({navigation}) => {
    return (
            <View style={styles.container}>
                <Button title={"Your Recent Purchases"} onPress={() => navController(navigation, 'RecentPurchaseText')}/> 
                <Button title={"Your Recent Trips"} onPress={() => navController(navigation, 'RecentTrips')}/> 
                <Button title={"Your Recent Trips"} onPress={() => navController(navigation, 'RecentTrips')}/> 
            </View>
    );
}


{/**/}
export default MainNavigation;

const styles = StyleSheet.create({
    container: {

    },
    title: {

    },
});
