import RecentTrips from './stackComponents/RecentTrips';
import MainNavigation from "./stackComponents/MainNavigation";
import RecentPurchaseText from "./stackComponents/RecentPurchaseText";
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet } from 'react-native';



const Stack = createStackNavigator();

function StackNavigatorC() {
    return (
       <View style={styles.container}>
         <Stack.Navigator
        initialRouteName='MainNavigation'
        >

            <Stack.Screen name="Main Menu" component={MainNavigation} options={{
                headerTitleStyle: { textAlign: 'right', color: 'white' },
                headerStyle: {backgroundColor: '#62bab5'}
            }} />
            <Stack.Screen name="RecentTrips" component={RecentTrips} options={{
                headerTitleStyle: { textAlign: 'right', color: 'white' },
                headerStyle: {backgroundColor: '#62bab5'}
            }} />
            <Stack.Screen name="RecentPurchaseText" component={RecentPurchaseText} options={{
                headerTitleStyle: {color: 'white'},
                headerStyle: {backgroundColor: '#62bab5'}
            }}
            />
        </Stack.Navigator>
       </View>
    )
}

//Eksport af den funktionelle komponent, således den kan importeres i andre komponenter
export default StackNavigatorC

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: "100%",
        height: '100%',
        backgroundColor: 'red'
    },

})