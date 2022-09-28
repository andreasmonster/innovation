import DetailsScreenC from './DetailsScreen';
import ScreenOne from "./stackComponents/ScreenOne";
import ScreenTwo from "./stackComponents/ScreenTwo";
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';


const Stack = createStackNavigator();

function StackNavigatorC() {
    return (
        <Stack.Navigator
            initialRouteName="Details"
        >
            <Stack.Screen name="Details" component={DetailsScreenC}
                          options={{
                              headerTitleAlign: 'center',
                              headerTitleStyle: {color: 'white'},
                              headerStyle: {backgroundColor: '#ba6262'}}
                          }
            />
            <Stack.Screen name="ScreenOne" component={ScreenOne} options={{
                headerTitleStyle: { textAlign: 'right', color: 'white' },
                headerStyle: {backgroundColor: '#62bab5'}
            }} />
            <Stack.Screen name="ScreenTwo" component={ScreenTwo} options={{
                headerTitleStyle: {color: 'black'},
                headerStyle: {backgroundColor: '#628bba'}
            }}
            />
        </Stack.Navigator>
    )
}

//Eksport af den funktionelle komponent, således den kan importeres i andre komponenter
export default StackNavigatorC